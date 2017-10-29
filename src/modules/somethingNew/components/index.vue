<template lang="html">
    <div class="box">
        <section>
         <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">   
            <ul>
                <li v-for="(list,i) in dataList" :key="i" v-if="sum > i">
                    <div class="img_box">
                        <img v-bind:src="list.img" alt="">
                    </div>
                    <div class="list_test">
                        <p>{{list.s_title}}</p>
                        <p>{{list.s_content}}</p>
                        <p><span>{{list.online_time}}</span>|<span>{{list.view}}</span></p>
                    </div>
                </li>
            </ul>   
        </mt-loadmore>
        </section>
         <footer id="bbb">
             <div>11111</div>
         </footer>
    </div>    
</template>
<script>

import axios from 'axios';
import { Loadmore } from "mint-ui";
import Vue from "vue";
import "mint-ui/lib/style.css";
Vue.component(Loadmore.name, Loadmore );

    export default{
        data(){
            return{
                dataList: [],
                sum:0,
               "bottom-all-loaded":false,
               "distance-index":0
            }
        },
        methods:{
            handleButtonInfo(title){
                this.bbc = title
            }
        },
        mounted(){
            axios({
                method:'get',
                baseURL:'/api/web20/system/discover/?device_id=ab1f305daa1fc3052dc4586187b254ee&env=web&platform=web&tdk=ab1f305daa1fc3052dc4586187b254ee&uuid=ab1f305daa1fc3052dc4586187b254ee&access_token=R3JVaXdaNU9LWmxnQlhacHdGNXNnaVMwVTZWekVtNkJ3TGIrMXRKeVhBRT0%3D&version=3.8.0.2',
                headers:{
                    version:'3.8.0.2',
                    "x-region":'{"address_code":"110114"}',
                    'platform':'web'
                }

            })
            .then((res)=>{
                this.dataList = res.data.discover_list[0].discover_con_list
                
                console.log(this.dataList)
            })
        },
        methods:{
            loadTop(){
                this.$refs.loadmore.onTopLoaded();
            },
            loadBottom(){
              setTimeout(function(){
                     this.sum += 4
                     this.$refs.loadmore.onBottomLoaded();
                 }.bind(this),500)
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/index.scss";
</style>