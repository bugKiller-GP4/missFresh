<template>
  <div class="frend_list">
      <p>{{datapk.invate_charts[1].notice_tip}}</p>
      <div><img :src="datapk.invate_charts[1].no_rank_tip.tip_img" alt=""></div>
      <p>{{datapk.invate_charts[1].no_rank_tip.tip_content}}</p>
  </div>
</template>
<script>
export default {
  props:{
      datapk:{
          type:Object,
          required:true
      }
  },
  data(){
      return{}
  },
  mounted(){
      console.log(this.datapk)
  }
}
</script>
<style lang="scss">
    @import "../styles/frendpk.scss";
</style>

