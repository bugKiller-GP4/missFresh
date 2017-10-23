<template>
<div>{{id}}
</div>

</template>

<script>
	export default {
		data(){
			return{
				id : this.$route.params.id
			}
		},

		mounted(){
		}
	}
</script>

<style>
</style>