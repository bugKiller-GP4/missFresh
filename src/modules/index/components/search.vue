<template>
	<div class="search_all">
		<div class="search_header">
			<div class="back" @click="goback">
				<img src="//static-as.missfresh.cn/frontend/img/back-search.png" @click="getmessage('slideout')" />
			</div>
			<div class="search_box">
				<img src="//static-as.missfresh.cn/frontend/img/icon-search.png"/>
				<input type="text" placeholder="请输入商品名称" v-model="search_msg"/>
			</div>
			<div class="search_text">
				<span @click="search(search_msg)">搜索</span>
			</div>
		</div>
		<div class="search_container" v-if="!isShow">
			<div class="hot">
				<div class="hot_title">
					<span>热门搜索</span>
				</div>
				<div class="hot_list">
					<span v-for="(value,i) in search_list" :key="i" @click="gosearch(value)">{{value}}</span>
				</div>
			</div>
			<div class="history">
				<div class="history_title">
					<span>历史记录</span>
				</div>
				<div class="history_list">
					<span v-for="(value,i) in his_lists" :key="i" @click="gosearch(value)">{{value}}</span>
				</div>
			</div>
		</div>
		<div class="lists_container" v-if="isShow">
			<div class="lists_title">
				<span></span>
			</div>
			<div class="lists_message">
				<ul v-for="(goods,i) in goods_lists">
					<li v-for="(goods_list,i) in goods" v-if="(goods_list.buy_permission===0&&i<=2)">
						<div class="li_container">
							<div class="img_left">
								<img :src="goods_list.image" v-lazy="goods_list.image"/>
								<img :src="goods_list.promote_tag"/>
							</div>
							<div class="message_right">
								<div class="message_title">
									{{goods_list.name}}
								</div>
								<div class="message_info">
									{{goods_list.subtitle}}
								</div>
								<div class="message_des">
									<span v-for="value in goods_list.product_tags">{{value.name}}</span>
								</div>
								<div class="message_highprice">
									<span>可用券价 ¥{{(goods_list.vip_price_pro.price_up.price)/100}}</span>
								</div>
								<div class="message_lowprice">
									<span>商城价 <span>¥&nbsp;</span><span>&nbsp;{{(goods_list.vip_price_pro.price_down.price)/100}}</span></span>
								</div>
								<div class="message_cart">
									<img :src="goods_list.cart_image"/>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="lists_title lists_title1">
				<span></span>
			</div>
			<div class="lists_message">
				<ul v-for="(goods,i) in goods_lists1">
					<li v-for="(goods_list,i) in goods" v-if="(goods_list.buy_permission===0&&i<=2)">
						<div class="li_container">
							<div class="img_left">
								<img :src="goods_list.image" v-lazy="goods_list.image"/>
								<img :src="goods_list.promote_tag"/>
							</div>
							<div class="message_right">
								<div class="message_title">
									{{goods_list.name}}
								</div>
								<div class="message_info">
									{{goods_list.subtitle}}
								</div>
								<div class="message_des">
									<span v-for="value in goods_list.product_tags">{{value.name}}</span>
								</div>
								<div class="message_highprice">
									<span>可用券价 ¥{{(goods_list.vip_price_pro.price_up.price)/100}}</span>
								</div>
								<div class="message_lowprice">
									<span>商城价 <span>¥&nbsp;</span><span>&nbsp;{{(goods_list.vip_price_pro.price_down.price)/100}}</span></span>
								</div>
								<div class="message_cart">
									<img :src="goods_list.cart_image"/>
								</div>
							</div>
						</div>
					</li>
				</ul>
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
				goods_lists : [],
				goods_lists1 : [],
				isShow : false,
				search_msg : '',
				his_lists : [],
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
				this.isShow = false;
				store.commit('show',false);
				this.search_msg = '';
			},
			search(msg){
				this.isShow = true;
				store.commit('addhis',msg);
				this.his_lists = store.state.searchhis;
				console.log(msg);
				axios({
					url : "/api/search/?device_id=52efdf46fa06eeda247fc87856ff93ae&env=web&fromSource=zhuye&kw="+msg+"&platform=web&uuid=52efdf46fa06eeda247fc87856ff93ae&version=3.8.0.1",
					method : "get",
					headers : {
						'x-region':'{"station_code":"","address_code":"330100"}',
						'X-Tingyun-Id':'Q1KLryMuSto;r=36224154',
						'platform':'web',
						"version" : '3.8.0.1',
					}
				}).then(function(res){
					console.log(res.data.data);
					this.goods_lists = res.data.data[0];
					this.goods_lists1 = res.data.data[1];
				}.bind(this))
			},
			gosearch(msg){
				this.search_msg = msg;
				this.search(msg);
			}
		}
	}
</script>

<style lang="scss">
	@import "../styles/search.scss";
</style>