<template>
    <div class="box" v-if="ishow">
        <header class="address">

        </header>
        <section>
            <div class="main_top">
                <div class="top_left">
                    <div class="shop_all"></div>
                    <span>次日达</span>
                </div>
                <div class="top_right">
                        实付满69包邮, 还差55.16元, 去凑单
                        <div>
                            <img src="" alt="">
                        </div>
                </div>
            </div>
            <ul class="shoplist">
                <li v-for="(item,i) in active_item" :key="i">
                    <div class="shop_d"></div>
                    <div class="img_box">
                        <img :src="item.images.cart" alt="">
                    </div>
                    <div class="list_main">
                        <p>{{item.name}}</p>
                        <span>{{item.product_tags[0].name}}</span>
                        <p>{{item.vip_price_pro.price_down.name}} <span>{{data[0].active_item[0].vip_price_pro.price_down.price / 100}}</span></p>
                        <p>{{item.vip_price_pro.price_up.name}} <span>{{data[0].active_item[0].vip_price_pro.price_up.price / 100}}</span></p>
                    </div>
                    <div class="list_sum">
                        <span>-</span>
                        <span>123</span>
                        <span>+</span>
                    </div>
                </li>
            </ul>
        </section>
        <div class="all_price">
            <div class="price_left">
                <div></div>
                <span>全选</span>
            </div>
            <div class="price_middle">
                合计<span>1111</span>
            </div>
            <div class="price_right">去结算</div>
        </div>
        <footer>

        </footer>
    </div>  
</template>

<script>
import axios from 'axios';
import Vue from "vue";
import store from "../../index/scripts/vuex/store.js"
    export default {
        data(){
            return{
                data:[],
                active_item:[],
                ishow:true
            }
        },
        mounted(){
            console.log(store.state.goods_list);
            this.active_item = store.state.goods_list;
        }
    }
</script>
<style lang="scss">
    @import "../styles/cart.scss";
</style>

