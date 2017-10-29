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
                        <div class="ball"></div>
                    </div>
                 </li>
                 <li>
                    <span>优惠消息</span>
                    <div class="move">
                        <div class="ball"></div>
                    </div>
                 </li>
             </ul>
         </div>
     </div>
  </div>
</template>
<script>
    import axios from 'axios';
    import bus from '../../../scripts/bus';
    export default {
    }
</script>
<style lang="scss">
    @import '../styles/setting.scss';
</style>
