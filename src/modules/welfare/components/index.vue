<template lang="html">
    <div class="box">
        <section v-if="Isshow">
            <div class="top_img_box">
                <img :src="banner" alt="">
                <img :src="data.image_url" alt="">
            </div>
            <div class="middle_box">
                <div>
                    <span>详细规则</span>
                    <span class="iconfont">&#xe6a3;</span>
                </div>
                <p>{{title}}</p>
                <p>{{pro_doc}}<span class="iconfont">&#xe6a7;</span></p>
                <div class="Invitation_welfare">
                    <ul >
                        <li>
                            <img :src="invate_config[0].invate_level_image" alt="">
                            <div>
                                <p><span>0</span></p>
                                <span class="line"></span>
                            </div>
                            <p>{{invate_config[0].invate_level_num}}位</p>
                        </li>
                        <li v-for="(list,i) in invate_config" :key="i" v-if="i > 0">
                            <img :src="list.invate_level_image" alt="">
                            <div>
                                
                                <span class="line"></span>
                            </div>
                            <p>{{list.invate_level_num}}位</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bottom_box">
                <div class="bottom_p">
                    <span @click="line_left" :class="{line_color : righttab}" >{{data.invate_charts[0].name}}</span>
                    <span @click="line_right" :class="{line_color : lefttab}">{{data.invate_charts[1].name}}</span>
                    <div :class="[{line_r : lefttab},{line_l : righttab},'bottom_line']"></div>
                </div>
                <Allpk :datapk="data" v-if="righttab" />
                <Frendpk :datapk="data" v-if="lefttab"/>
            </div>
        </section>
         <footer id="bottom">
           <p @click="pshare">立即邀请</p>
         </footer>
         <div class="share" v-if="fshare">
             <div :class="{b_draw : draw_share}">
                    <p @click="lshare">新浪微博</p>
                    <p @click="lshare">取消</p>
             </div>
         </div>
    </div>    
</template>
<script>
import axios from 'axios';
import Vue from "vue";
import "mint-ui/lib/style.css";
import Allpk from "./allpk.vue";
import Frendpk from "./frendpk.vue";

    export default{
        data(){
            return {
                Isshow:false,
                data:{},
                lefttab:false,
                righttab:true,
                banner:'',
                title:'',
                pro_doc:'',
                invate_config:[],
                fshare:false,
                draw_share:false
            }
        },
        methods:{
            line_right(){
                this.lefttab=true;
                this.righttab=false;
            },
            line_left(){
                this.lefttab = false;
                this.righttab = true;
            },
            pshare(){
                this.fshare = true
                this.draw_share = false
            },
            lshare(){
                this.draw_share = true
                setTimeout(()=>{this.fshare = false},500)
            }
        },
        components:{
            Allpk,
            Frendpk
        },
        mounted(){
            axios({
                method:'get',
                baseURL:'/api/web20/KOL/getInvateInfo?device_id=ab1f305daa1fc3052dc4586187b254ee&env=web&platform=web&tdk=ab1f305daa1fc3052dc4586187b254ee&uuid=ab1f305daa1fc3052dc4586187b254ee&access_token=R3JVaXdaNU9LWmxnQlhacHdGNXNnaVMwVTZWekVtNkJ3TGIrMXRKeVhBRT0%3D&version=3.8.0.2'
            })
            .then((res)=>{
                if(!!res){
                    this.Isshow = true
                }            
                this.data = res.data
                this.banner = this.data.banner[0].path
                this.title = this.data.invate_info.invate_title
                this.pro_doc = this.data.invate_info.invite_pro_doc
                this.invate_config = this.data.invate_info.invate_config
            })
        }
    }
</script>

<style lang="scss">
    @import "../styles/index.scss";
</style>