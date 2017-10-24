<template lang="html">
	<div class="m-index">
		<header >
			<IndexHeader :gettype="gettype" :getmessage="getmessage"></IndexHeader>
		</header>
		<section >
			<router-view :type="type"></router-view>
			
		</section>
		<footer >
			<IndexFooter></IndexFooter>
		</footer>
		<search :class="{ slidein : isShow=='slidein' ,slideout : isShow =='slideout'}" :getmessage="getmessage"></search>
	</div>
</template>

<script>
	import IndexFooter from "./footer.vue"
	import IndexHeader from "./header.vue"
	import IndexSection from "./section.vue"
	import search from "./search.vue"
	import axios from "axios"
	import store from "../scripts/vuex/store.js"
	export default {
		props : ["message"],
		data(){
			return  {
				type : '',
				isShow : ''
			}
		},
		methods : {
			getnum : function(title){
			},
			gettype(type){
				this.type = type;
			},
			getmessage(message){
				this.isShow = message;
			}
		},
		components : {
			IndexFooter : IndexFooter,
			IndexHeader : IndexHeader,
			IndexSection : IndexSection,
			search : search
		},
		mounted(){
			this.isShow = store.state.isInSearch;
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