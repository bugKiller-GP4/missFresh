<template>
  <div class="bottom_list">
    <p>{{datapk.invate_charts[0].notice_tip}}</p>
            <ul>
                <li>
                </li> 
            </ul>       
    </div>
</template>
<script>
export default {
  props:{
      datapk:{
          type: Object,
          required:true
      }
  },
  data(){
      return {
          
      }
  },
  mounted(){
      console.log(this.datapk)
  }
}
</script>
<style>

</style>

