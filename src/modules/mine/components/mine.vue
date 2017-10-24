<template lang="html">
    <div class="m-index">
        <div class="change">
            <header>
                <!-- <button @click="login">用户登录</button> -->
                <router-link to="/Login" v-show="!isShowButton">
                    <button>用户登录</button>                
                </router-link>
                <div class="user" v-show="isShowButton">
                    <img src="../images/userimg.png" alt="" class="user1">
                    <p>小鲜</p>
                    <img src="../images/uservip.png" alt="" class="user2">
                </div>
            </header>
            <section>
                <ul class="home-total">
                    <li>
                        <p class="remain-money">
                            <i class="ng-binding">0</i>元
                        </p>
                        <p class="nb-binding">余额</p>
                    </li>
                    <li>
                        <p class="remain-money">
                            <i class="ng-binding">0</i>张
                        </p>
                        <p class="nb-binding">红包</p>
                    </li>
                    <li>
                        <p class="remain-money">
                            <i class="ng-binding">0</i>张
                        </p>
                        <p class="nb-binding">优惠券</p>
                    </li>
                    <li>
                        <p class="remain-money">
                            <i class="ng-binding">0</i>分
                        </p>
                        <p class="nb-binding">积分</p>
                    </li>               
                </ul>
                <div class="invite">
                    <div class="invite-img"></div>
                    <img src="../images/rightarrow.png" alt="">
                </div>
                <!-- <div class="store">
                    <p>储值有礼</p>
                    <p>储值100元送金卡</p>
                    <ul>
                        <li>
                            <span><i>100</i>元</span>
                            <span>首次充值送1天金卡</span>
                        </li>
                        <li>
                            <span><i>200</i>元</span>
                            <span>首次充值送2天金卡</span>
                        </li>
                        <li>
                            <span><i>500</i>元</span>
                            <span>首次充值送7天金卡</span>
                        </li>
                        <li>
                            <span><i>1000</i>元</span>
                            <span>首次充值送10天金卡</span>
                        </li>
                    </ul>
                </div> -->
                <ul class="home-list">
                    <li>
                        <span>我的订单</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>我的会员卡</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>我的地址</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>下载每日优鲜APP</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>联系客服</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>意见反馈</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>消息</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>关于我们</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                    <li>
                        <span>设置</span>
                        <img src="../images/rightarrow.png" alt="">                
                    </li>
                </ul>
            </section>
        </div>
        <footer>
        </footer>
    </div>
</template>
<script>
    import Bus from '../../../scripts/bus';
    export default {
        data(){
            return {
                isShowButton: false
            }
        },
        mounted() {
            // this.$route.query.isShow ? this.isShowButton = this.$route.query.isShow : '';
            this.$route.params.isShow ? this.isShowButton = this.$route.params.isShow : '';            
            Bus.$on('is-log', (data)=>{
                console.log(data);
            })
        }
    }
</script>
<style lang="scss">
    @import '../styles/mine.scss';
</style>