<template lang="html">
  <div class="login">
      <header>
          <button @click="back"></button>
          <span>验证手机</span>
      </header>
      <div class="reg" @click="inReg">注册</div>
      <div class="login-list">
            <div class="phone">
                <input type="text" placeholder="请输入手机号" class="phone-num" ref="phoneNum" autofocus>
                <button class="get-yzm" >语音验证码</button>
            </div>
            <div class="password">
                <input type="password" placeholder="请输入验证码" class="in-yzm" ref="pwd">
            </div>
            <button class="log" @click="log">登录</button>
            <p>为方便您及时查询订单信息，需要验证您的手机号来登录</p>
      </div>
      <div class="warn" v-show="isShow">请输入正确的手机号</div>
      <div class="warn" v-show="wasShow">用户名密码不符</div>      
  </div>
</template>
<script>
    import axios from 'axios';
    import store from '../../index/scripts/vuex/store';
    export default {
        data() {
            return {
                isShow : false,
                wasShow : false
            }
        },
        methods: {  
            log(){
                if(/^1[34578][0-9]{9}$/.test(this.$refs.phoneNum.value)){
                    axios({
                        method: 'get',
                        url:`http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=${this.$refs.phoneNum.value}&password=${this.$refs.pwd.value}`
                    }).then((res)=>{
                        switch(res.data){
                            case 0 : break;
                            case 2 : this.wasShow = true;
                                    setTimeout(function() {
                                        this.wasShow = false
                                    }.bind(this), 1500);break;
                            default: 
                                    store.state.isLogin = true;
                                    this.$router.push('mine');
                                    sessionStorage.setItem('User',this.$refs.phoneNum.value)
                                    break;
                        }
                    });
                }else{
                    this.isShow = true;
                    setTimeout(function() {
                        this.isShow = false
                    }.bind(this), 1500);
                }
            },
            back(){
                this.$router.push('mine');
            },
            inReg(){
                this.$router.push('register');
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/login.scss';
</style>
