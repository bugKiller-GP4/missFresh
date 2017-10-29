<template lang="html">
  <div class="setting">
      <header>
          <button @click="back"></button>
          <span>设置</span>
      </header>
     <div class="user">
         <img src="../images/userimg.png" alt="">
     </div>
     <div class="msg">
         <div class="name">昵称
             <span>小鲜</span>
         </div>
         <div class="cache">
            <ul>
                <li>
                    <span>版本</span>
                    <img src="../images/rightarrow.png" alt="">                
                </li>
                <li>
                    <span>清除缓存</span>
                    <img src="../images/rightarrow.png" alt="">                
                </li>
            </ul>
         </div>
         <div class="message">
             <ul>
                 <li>
                    <span>订单消息</span>
                    <div class="move">
                        <div class="ball" :class="{ leftball:!left1, rightball:left1}" @click="move1"></div>
                    </div>
                 </li>
                 <li>
                    <span>优惠消息</span>
                    <div class="move">
                        <div class="ball" :class="{ leftball:!left2, rightball:left2}" @click="move2"></div>
                    </div>
                 </li>
             </ul>
         </div>
         <button class="out" @click="out">退出登录</button>         
     </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                left1:false,
                left2:false                
            }
        },
        methods:{
            out(){
                this.$router.push({name: 'Mine',params:{isShow:false}});
                sessionStorage.removeItem('User');
            },
            back(){
                history.go(-1)
            },
            move1(){
                this.left1 ? this.left1 = false : this.left1 = true
            },
            move2(){
                this.left2 ? this.left2 = false : this.left2 = true
            }
        }
    }
</script>
<style lang="scss">
    @import '../styles/setting.scss';
</style>
