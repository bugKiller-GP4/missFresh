<template>
	<div>
		<ul>
			<li>
				<img src="https://j-image.missfresh.cn/img_20170816184022244.png"/>
			</li>
			<li>
				<div>
					<span>
						<img src="https://j-image.missfresh.cn/img_20161026155951214.png"/>
					</span>
					<span>
						北京市
					</span>
					<span>
						<i class="iconfont">&#xe6ec;</i>
					</span>
				</div>
				<div>
					<img src="//static-as.missfresh.cn/frontend/img/home-search-3x-black.png" @click="getmessage('slidein')"/>
				</div>
			</li>
			<li>
				<div class="scroll">
					<ul>
						<li :ref="'huoguo'">
							<span @click="goto('hot')" :class="{active : this.store.state.type=='hot'}" >热卖</span>
						</li>
						<li>
							<span @click="goto('huoguo')" :class="{active : this.store.state.type=='huoguo'}">火锅</span>
						</li>
						<li>
							<span @click="goto('fruit')" :class="{active : this.store.state.type=='fruit'}">水果</span>
						</li>
						<li>
							<span @click="goto('sc')" :class="{active : this.store.state.type=='sc'}">蔬菜</span>
						</li>
						<li>
							<span @click="goto('milk')" :class="{active : this.store.state.type=='milk'}">乳品</span>
						</li>
						<li>
							<span @click="goto('food')" :class="{active : this.store.state.type=='food'}">肉蛋</span>
						</li>
						<li>
							<span @click="goto('snack')" :class="{active : this.store.state.type=='snack'}">零食</span>
						</li>
						<li>
							<span @click="goto('drink')" :class="{active : this.store.state.type=='drink'}">酒饮</span>
						</li>
						<li>
							<span @click="goto('seafood')" :class="{active : this.store.state.type=='seafood'}">水产</span>
						</li>
						<li>
							<span @click="goto('fastfood')" :class="{active : this.store.state.type=='fastfood'}">速食</span>
						</li>
						<li>
							<span @click="goto('liangyou')" :class="{active : this.store.state.type=='liangyou'}">粮油</span>
						</li>
						<li>
							<span @click="goto('qingshi')" :class="{active : this.store.state.type=='qingshi'}" >轻食</span>
						</li>
						<li>
							<span @click="goto('com')" :class="{active : this.store.state.type=='com'}">日白</span>
						</li>
					</ul>
				</div>
				<div>
					<i class="iconfont" @click="showlist()">&#xe643;</i>
				</div>
				<div class="list_more" v-if="isshow">
					<div class="all_title">
						全部商品
						<i @click="showlist()"></i>
					</div>
					<div class="all_lists">
						<ul>
							<li v-for="(img_url,i) in img_urls" :key="i"  @click="torward(img_url.name)">
								<i :style="'background-image:url('+ img_url.icon +')' ">
									
								</i>
								<h4>
									{{img_url.name}}
								</h4>
							</li>
							
						</ul>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import IsScroll from "../scripts/libs/iscroll-probe.js"
	import store from "../scripts/vuex/store.js"
	import axios from "axios"
	export default {
		props : ["gettype","getmessage"],
		data(){
			return {
				store,
				img_urls : [],
				isshow : false
			}
		},
		methods : {
			goto(type){
				if(type=='huoguo'){
					this.$router.push('/index/huoguo')
				}else if(type=='hot'){
					this.$router.push('/index/hot')
				}else{
					this.$router.push({name : 'fruits',params : {type : type}});
				}
				this.gettype(type);
				store.commit('update',type);
			},
			showlist(){
				this.isshow = !this.isshow;
			},
			gotosearch(){
				store.commit('show',true);
			},
			torward(type){
				switch(type){
					case '热卖' : {
						this.isshow = !this.isshow;
						store.commit('update','hot');
						this.$router.push('/index');
						break;
					}
					case '火锅' : {
						this.isshow = !this.isshow;
						store.commit('update','huoguo');
						this.$router.push({ name : 'huoguo'});
						break;
					}
					case '水果' : {
						this.isshow = !this.isshow;
						store.commit('update','fruit');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '蔬菜' : {
						this.isshow = !this.isshow;
						store.commit('update','sc');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '乳品' : {
						this.isshow = !this.isshow;
						store.commit('update','milk');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '肉蛋' : {
						this.isshow = !this.isshow;
						store.commit('update','food');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '零食' : {
						this.isshow = !this.isshow;
						store.commit('update','snack');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '酒饮' : {
						this.isshow = !this.isshow;
						store.commit('update','drink');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '水产' : {
						this.isshow = !this.isshow;
						store.commit('update','seafood');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '速食' : {
						this.isshow = !this.isshow;
						store.commit('update','fastfood');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '粮油' : {
						this.isshow = !this.isshow;
						store.commit('update','liangyou');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '轻食' : {
						this.isshow = !this.isshow;
						store.commit('update','qingshi');
						this.$router.push({ name : 'fruits'});
						break;
					}
					case '日百' : {
						this.isshow = !this.isshow;
						store.commit('update','com');
						this.$router.push({ name : 'fruits'});
						break;
					}
				}
			}
		},
		mounted(){
			console.log(this.$refs)
			new IsScroll('.scroll',{
				scrollX: true
			});
			var that = this;
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
				that.img_urls = response.data.category_list;
			})
		}
	}
</script>

<style lang="scss">
	@import "../styles/header.scss";
</style>