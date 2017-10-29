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
  methods:{
  },
  mounted(){
      console.log(this.datapk)
  }
}
</script>
<style lang="scss">
    @import "../styles/allpk.scss";
</style>

