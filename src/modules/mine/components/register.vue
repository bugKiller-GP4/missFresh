<template lang="html">
  <div class="login">
      <header>
          <button @click="back"></button>
          <span>注册账号</span>
      </header>
      <div class="login-list">
            <div class="phone">
                <input type="text" placeholder="请输入手机号" class="phone-num" ref="phoneNum" autofocus>
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" class="in-yzm" ref="pwd">
            </div>
            <button class="log" @click="regist">注册</button>
            <p>为方便您及时查询订单信息，需要验证您的手机号来注册</p>
      </div>
      <div class="warn" v-show="isShow">请输入正确格式的手机号和密码</div>
  </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                isShow : false
            }
        },
        methods: {
            regist(){
                if(/^1[34578][0-9]{9}$/.test(this.$refs.phoneNum.value) && /^[0-9a-zA-Z-_=&\$#@]{6,12}$/.test(this.$refs.pwd.value) ){
                    axios({
                        method: 'get',
                        url:`http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=${this.$refs.phoneNum.value}&password=${this.$refs.pwd.value}`
                    }).then((res)=>{
                        switch(res.data){
                            case 1 : this.$router.push('./Login'); break;
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
                history.go(-1)
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/login.scss';
</style>
