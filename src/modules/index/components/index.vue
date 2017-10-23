<template lang="html">
	<div class="m-index">
		<header>
			<IndexHeader></IndexHeader>
		</header>
		<section>
			<router-view></router-view>
		</section>
		<footer>
			<IndexFooter></IndexFooter>
		</footer>
	</div>
</template>

<script>
	import IndexFooter from "./footer.vue"
	import IndexHeader from "./header.vue"
	import IndexSection from "./section.vue"
	import axios from "axios"
	
	export default {
		data(){
			return  {
			}
		},
		methods : {
			getnum : function(title){
			}
		},
		components : {
			IndexFooter : IndexFooter,
			IndexHeader : IndexHeader,
			IndexSection : IndexSection
		},
		mounted(){
			axios({
				url : '/api/v2/product/home/index?device_id=3d48c219f6d8d2386530b0b414bfb6cb&env=web&fromSource=zhuye&platform=web&uuid=3d48c219f6d8d2386530b0b414bfb6cb&version=3.8.0.1',
				method : 'post',
				headers : {
					"Content-Type" : "application/json;charset=UTF-8",
					"x-region" : '{"station_code":"","address_code":"110105"}',
					"X-Tingyun-Id" : "Q1KLryMuSto;r=75130083",
					"version" : '3.8.0.1',
					'platform':'web'
				},
				data : {
					lat : ""
				}
			})
				.then(function(response){
					console.log(response);
				})
		}
	}
</script>

<style lang="scss">
	@import "../styles/index.scss";
</style>