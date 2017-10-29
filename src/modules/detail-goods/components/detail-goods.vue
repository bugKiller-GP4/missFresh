<template lang="html">
	<div class="goods" v-if="showall" >
		<share v-if="showShare" :showShare="showShare" @showShareFunction="changeShare"></share>
		<header>
			<div class="back">
				<span class="iconfont">&#xe7ed;</span>
			</div>
			<ul class="goods-navbar">
				<li class="detail active">商品详情</li>
				<li class="quality">安心保障</li>
			</ul>
			<div class="share" v-on:click="showShareBox" >
				<span class="iconfont">&#xe7d4;</span>
			</div>
		</header>
		<section>
			<div class="goods-banner">
				<ul>
					<li v-for="(item,i) in data.images"><img :src="item"></li>
				</ul>
			</div>
			<div class="detail-info">
				<div class="title">“{{data.subtitle}}”</div>
				<div class="num">{{data.name}}</div>
				<div class="sale">{{data.vip_price_pro.price_up.name}}￥<span>{{data.vip_price_pro.price_up.price/100}}</span></div>
				<div class="vip">
					<span>{{data.vip_price_pro.price_down.name}}￥<i>{{data.vip_price_pro.price_down.price/100}}</i></span>
					<b>已售{{data.sales_volume}}份</b>
				</div>
				<div class="other-info">
					<span>
						<i class="iconfont">&#xe7f3;</i>
						<b>{{data.country}}</b>
					</span>
					<span>
						<i class="iconfont">&#xe671;</i>
						<b>{{data.delivery_mode_name}}</b>
					</span>
					<span>
						<i class="iconfont">&#xe6d3;</i>
						<b>实付满69包邮</b>
					</span>
				</div>
			</div>
			<div class="present">
				<div class="title">
					<span>
						<img src="http://missfresh-asschool-develop-common.ufile.ucloud.com.cn/img_20170215184830712.png">
						<b>买就送积分，多买多得</b>
						<i class="iconfont">&#xe691;</i>
					</span>
				</div>
				<div class="share01">
					<span>
						<img src="https://j-image.missfresh.cn/img_20171019234117594.png" />
					</span>
					<span>
						{{data.product_share_info_v2.share_product_text}}
					</span>
				</div>
				<div class="share02" v-on:click="showShareBox" >
					<span>点击分享</span>
				</div>
			</div>
			<div class="light">
				<div class="light-title">
					<span><img src="//static-as.missfresh.cn/frontend/img/bright-left.png"/></span>
					<span>亮点</span>
					<span><img src="//static-as.missfresh.cn/frontend/img/bright-right.png"/></span>
				</div>
				<ul class="goods-dec">
					<li v-for="(item,i) in data.description">{{data.description[i]}}</li>
				</ul>
			</div>
			<div class="dec-list">
				<div class="title">商品详情</div>
				<ul class="decoration">
					<li>规格：{{data.unit}}</li>
					<li>重量：{{data.weight}}</li>
					<li>包装：{{data.pack}}</li>
					<li>保质期：{{data.storage_time}}</li>
					<li>存储方式：{{data.storage_method}}</li>
				</ul>
				<ul class="goods-pic">
					<li v-for="(item,i) in data.instruction"><img :src="item.image"></li>
				</ul>
			</div>
			<div class="safe">
				<div class="safe-title">安心保障</div>
				<div class="safe-pic">
					<img v-for="(item,i) in data.qa_info" :src="item.picUrl"/>
				</div>
			</div>
			
		</section>
		<footer>
			<div class="shopcar">
				<span class="iconfont">
					&#xe6af;
					<i class="goods_num">1</i>
				</span>
			</div>
			<div class="addToCar">
				<span>加入购物车</span>
			</div>
		</footer>
	</div>
</template>

<script>
	
	import axios from 'axios';
	import share from "./share.vue";
	//import "mint-ui/lib/style.css";
	export default {
		data() {
			return {
				data: {},
				showShare:false,
				showall:false
				
			}
		},
		components:{
			share
		},
		methods: {
			showShareBox(){
				this.showShare=true
			},
			changeShare(){
				this.showShare=false
			}
		},
		mounted() {
			axios({
				method: 'get',
				url: '/api/v3/product/p-hbazqc-2g?access_token=QXhldlYrc0RpZ0l1a0FKN1pRZEtIanFGT3V1RkszMnZDZGNzcXFacG8vRT0%3D&device_id=6624ad620c5a34adf57e36d47e3a8dd5&env=web&fromSource=zhuye&platform=web&uuid=6624ad620c5a34adf57e36d47e3a8dd5&version=3.8.0.1',
				headers: {
					"platform":"web",
					"version":"3.8.0.1",
					"x-region":'{"station_code":"","address_code":"110114"}',
					"X-Tingyun-Id":"Q1KLryMuSto;r=57523193"
				}
			}).then((res) => {
				this.data = res.data;
				this.showall = true
			})
		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../styles/detail-goods.scss";
</style>