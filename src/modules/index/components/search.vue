<template>
	<div class="search_all">
		<div class="search_header">
			<div class="back">
				<img src="//static-as.missfresh.cn/frontend/img/back-search.png" @click="getmessage('slideout')"/>
			</div>
			<div class="search_box">
				<img src="//static-as.missfresh.cn/frontend/img/icon-search.png"/>
				<input type="text" placeholder="请输入商品名称" />
			</div>
			<div class="search_text">
				<span>搜索</span>
			</div>
		</div>
		<div class="search_container">
			<div class="hot">
				<div class="hot_title">
					<span>热门搜索</span>
				</div>
				<div class="hot_list">
					<span v-for="(value,i) in search_list" :key="i">{{value}}</span>
				</div>
			</div>
			<div class="history">
				<div class="history_title">
					<span>历史记录</span>
				</div>
				<div class="history_list">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import store from "../scripts/vuex/store.js"
	export default{
		props:["getmessage"],
		data(){
			return{
				search_list : [],
			}
		},
		mounted(){
			axios({
				url : "/api/v3/product/searchhotwords/?device_id=52efdf46fa06eeda247fc87856ff93ae&env=web&fromSource=zhuye&platform=web&uuid=52efdf46fa06eeda247fc87856ff93ae&version=3.8.0.1",
				method : "get",
			}).then(function(res){
				this.search_list = res.data.data;
			}.bind(this))
		},
		methods:{
			goback(){
				store.commit('show',false);
			}
		}
	}
</script>

<style lang="scss">
	@import "../styles/search.scss";
</style>