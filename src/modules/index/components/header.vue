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
					<img src="//static-as.missfresh.cn/frontend/img/home-search-3x-black.png"/>
				</div>
			</li>
			<li >
				<div class="scroll">
					<ul>
						<li>
							<router-link to="/index/hot" tag="span" :active-class="'active'">热卖</router-link>
						</li>
						<li>
							<router-link :to="{ name : 'huoguo' , params : {id : 123456} }"  tag="span" :active-class="'active'">火锅</router-link>
						</li>
						<li>
							<router-link to="/index/fruits" tag="span" :active-class="'active'">水果</router-link>
						</li>
						<li>
							<span>蔬菜</span>
						</li>
						<li>
							<span>乳品</span>
						</li>
						<li>
							<span>肉蛋</span>
						</li>
						<li>
							<span>零食</span>
						</li>
						<li>
							<span>酒饮</span>
						</li>
						<li>
							<span>水产</span>
						</li>
						<li>
							<span>速食</span>
						</li>
						<li>
							<span>粮油</span>
						</li>
						<li>
							<span>轻食</span>
						</li>
						<li>
							<span>日白</span>
						</li>
					</ul>
				</div>
				<div>
					<i class="iconfont">&#xe643;</i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import IsScroll from "../scripts/libs/iscroll-probe.js"
	export default {
		props : ["id","change"],
		data(){
			return {
			}
		},
		methods : {
		},
		mounted(){
			new IsScroll('.scroll',{
				scrollX: true
			})
		}
	}
</script>

<style lang="scss">
	@import "../styles/header.scss";
</style>