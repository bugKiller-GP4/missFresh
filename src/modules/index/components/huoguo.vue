<template>
	<div>
		<div class="load_img" v-if="isloading"><img src="../../../../dev/media/images/loading-gif.gif" /></div>
		<div v-if="!isloading">
			<mt-loadmore :bottomDistance="0" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :bottomAllLoaded="false" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" >
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
				<div class="img_first">
					<img :src="img_first.path" />
				</div>
				<div class="img_second">
					<img :src="img_second.path"/>
				</div>
				<div class="huoguo_list">
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
						<div class="img_container" v-else>
							<img v-for="(value,i) in goods_list.banner" :src="value.path" :key="i"/>
						</div>
					</ul>
				</div>
				<div slot="bottom" class="mint-loadmore-bottom">
			      <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">
			      </span>
			      <span v-show="bottomStatus === 'loading'">
			      </span>
			    </div>
			</mt-loadmore>
		</div>
	</div>

</template>

<script>
	import Vue from "vue"
	import { Loadmore } from "mint-ui"
	import { Lazyload } from 'mint-ui';
	import "mint-ui/lib/style.css"
	import axios from "axios"
	Vue.component(Loadmore.name, Loadmore);
	Vue.use(Lazyload);
	export default {
		data(){
			return{
				img_first : {},
				img_second : {},
				godds_lists_all : [],
				page_num : 7,
				topStatus: '',
				bottomStatus : '',
				allLoaded : false,
				goods_lists : [],
				godds_lists_all : [],
				isloading : true
			}
		},

		mounted(){
			var that = this;
			axios({
				url : '/api/v3/product/category/hbcrd-huoguo?device_id=3d48c219f6d8d2386530b0b414bfb6cb&env=web&fromSource=zhuye&platform=web&uuid=3d48c219f6d8d2386530b0b414bfb6cb&version=3.8.0.1',
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
				console.log(response);
				that.img_first = response.data.banner[0];
				that.img_second = response.data.products[0].banner[0];
				that.goods_lists_all = response.data.products;
				that.goods_lists = that.goods_lists_all.slice(1,7);
				that.isloading = false;
			})
		},
		methods:{
			loadTop(){
				var that = this;
					axios({
					url : '/api/v3/product/category/hbcrd-huoguo?device_id=3d48c219f6d8d2386530b0b414bfb6cb&env=web&fromSource=zhuye&platform=web&uuid=3d48c219f6d8d2386530b0b414bfb6cb&version=3.8.0.1',
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
					console.log(response)
					that.img_first = response.data.banner[0];
					that.img_second = response.data.products[0].banner[0];
					that.goods_lists = response.data.products;
					that.goods_lists.shift();
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
	      	gotodetail(params){
	      		this.$router.push({ name : 'detail',query : {sku : params}});
	      	},
	      	gotocart(event,obj){
	      		event.cancelBubble = true;
	      		console.log(store.state.goods_list);
	      		store.commit('addtocarts',obj);
	      	}
		}
	}
</script>

<style lang="scss">
	@import "../styles/huoguo.scss";
</style>