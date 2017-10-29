<template>
	<div>
		<div class="load_img" v-if="isloading"><img src="../../../../dev/media/images/loading-gif.gif" /></div>
		<div v-if="!isloading">
			<mt-loadmore  :bottomDistance="0" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :bottomAllLoaded="false" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" >
				<div slot="top" class="mint-loadmore-top">
			      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
			      	<img src="../../../../dev/media/images/loading-gif.gif" width="120" height="40"/>
			      	<p>优质生鲜 两小时到</p>
			      </span>
			      <span v-show="topStatus === 'loading'">
			      	<img src="../../../../dev/media/images/loading-gif.gif" width="120" height="40"/>
			      	<p>优质生鲜 两小时到</p>
			      </span>
			    </div>
				<div class="banner">
					<mt-swipe :auto="4000">
					  <mt-swipe-item v-for="(value,i) in imgs" :key="i"><img :src="value.path"/></mt-swipe-item>
					</mt-swipe>
				</div>
				<div class="goods">
					<div class="title">
						<span>今日特卖</span>
					</div>
					<div class="goods_list">
						<ul>
							<li v-for="(goods_list,i) in goods_lists" v-if="(goods_list.buy_permission===0)" @click="gotodetail(goods_list.sku)">
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
											<img :src="goods_list.cart_image" @click="gotocart($event,goods_list)"/>
										</div>
									</div>
								</div>
							</li>
							<div class="sell_out" v-else-if="goods_list.code=='sell-out'">
								<span>{{goods_list.name}}</span><span>{{goods_list.second_title}}</span>
							</div>
							<div class="no_banner" v-else-if="goods_list.banner==undefined">
								<span>{{goods_list.name}}</span><span>{{goods_list.second_title}}</span>
							</div>
							<div class="img_container" v-else>
								<img v-for="(value,i) in goods_list.banner" :src="value.path" :key="i"/>
							</div>
						</ul>
					</div>
				</div>
				<div slot="bottom" class="mint-loadmore-bottom">
			      <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">
			      </span>
			      <span v-show="bottomStatus === 'loading'">
			      </span>
			    </div>
			    <div>{{look()}}</div>
			</mt-loadmore>
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue"
	import { Swipe , SwipeItem} from "mint-ui"
	import { Loadmore } from "mint-ui"
	import { Lazyload } from 'mint-ui';
	import "mint-ui/lib/style.css"
	import axios from "axios"
	import store from "../scripts/vuex/store.js"
	Vue.component(Loadmore.name, Loadmore);
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.use(Lazyload);
	export default{
		props : ["type"],
		data(){
			return {
				imgs : [],
				goods_lists : [],
				godds_lists_all : [],
				page_num : 7,
				topStatus: '',
				bottomStatus : '',
				allLoaded : false,
				store,
				num : this.$route.params,
				looked : 'fruit',
				isloading : true
			}
		},
		mounted(){
			console.log(this.store.state.type);
			var that = this;
				axios({
					url : '/api/v3/product/category/hd-'+that.store.state.type+'?device_id=52efdf46fa06eeda247fc87856ff93ae&env=web&fromSource=zhuye&platform=web&uuid=52efdf46fa06eeda247fc87856ff93ae&version=3.8.0.1',
					method : 'get',
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
					that.imgs =  response.data.banner;
					that.goods_lists_all = response.data.products;
					that.goods_lists = that.goods_lists_all.slice(1,7);
					that.isloading=false;
				})
		},
		updated(){
		},
		methods:{
			loadTop(){
				var that = this;
					axios({
					url : '/api/v3/product/category/hd-'+that.store.state.type+'?device_id=52efdf46fa06eeda247fc87856ff93ae&env=web&fromSource=zhuye&platform=web&uuid=52efdf46fa06eeda247fc87856ff93ae&version=3.8.0.1',
					method : 'get',
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
					that.imgs =  response.data.banner;
					that.goods_lists_all = response.data.products;
					that.$refs.loadmore.onTopLoaded();
				})
			},
			loadBottom(){
				this.page_num += 7 ;
				this.goods_lists = this.goods_lists_all.slice(1,this.page_num);
				this.allLoaded = true;
				this.$refs.loadmore.onBottomLoaded();
			},
			handleTopChange(status) {
	        	this.topStatus = status;
	      	},
	      	handleBottomChange(status) {
	        	this.bottomStatus = status;
	      	},
	      	look(){
	      		var that = this;
	      		setInterval(function(){
	      			this.looked = this.store.state.type
	      		}.bind(this),300)
	      	},
	      	gotodetail(params){
	      		console.log(params);
	      		this.$router.push({ name : 'detail',query : {sku : params}});
	      	},
	      	gotocart(event,obj){
	      		event.cancelBubble = true;
	      		console.log(store.state.goods_list);
	      		store.commit('addtocarts',obj);
	      	}
		},
		watch:{
			looked(){
				this.isloading=true;
				var that = this;
				axios({
					url : '/api/v3/product/category/hd-'+that.store.state.type+'?device_id=52efdf46fa06eeda247fc87856ff93ae&env=web&fromSource=zhuye&platform=web&uuid=52efdf46fa06eeda247fc87856ff93ae&version=3.8.0.1',
					method : 'get',
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
					that.imgs =  response.data.banner;
					that.goods_lists_all = response.data.products;
					that.goods_lists = that.goods_lists_all.slice(1,7);
					that.isloading=false;
				})
			},
			
		}
	}
</script>

<style lang="scss">
	@import "../styles/fruits.scss";
</style>