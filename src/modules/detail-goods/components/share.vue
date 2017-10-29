<template lang="html">
	<div class="sharebox" :show-share="showShare">
		<div class="canceltop" v-on:click="cancelShareBox"></div>
		<div class="share-contener">
			<div class="share-title">分享到</div>
			<ul class="share-list">
				<li v-on:click="goToShare('wx')">
					<p><img src="https://static-as.missfresh.cn/frontend/img/share-weixin.png" /></p>
					<span>微信好友</span>
				</li>
				<li v-on:click="goToShare('sina')">
					<p><img src="https://static-as.missfresh.cn/frontend/img/share-weibo.png" /></p>
					<span>微博</span>
				</li>
				<li v-on:click="goToShare('qq')">
					<p><img src="https://static-as.missfresh.cn/frontend/img/share-qq.png" /></p>
					<span>QQ</span>
				</li>
				<li v-on:click="goToShare('qqspace')">
					<p><img src="https://static-as.missfresh.cn/frontend/img/share-qqzone.png" /></p>
					<span>QQ空间</span>
				</li>
			</ul>
			<div class="cancel" v-on:click="cancelShareBox"><span>取消</span></div>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		props:['showShare'],
		data(){
			return {
				
			}
		},
		methods:{
			cancelShareBox(){
				this.$emit('cancelShareBox','showShare')
			},
			goToShare(type){
				this.$emit('showGoToShare',this.showShare)
				this.$emit('shareType',type)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../styles/share.scss";
</style>