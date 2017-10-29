<template lang="html">
	<div class="goshare">
			<div class="wrap">
				<div class="keysbox">
					<ul>
						<li><img src="//static-as.missfresh.cn/frontend/./img/red-share-price-icon.png"/></li>
						<li>
							<span v-if="toWx">{{data.share_info.title}}{{data.share_info.wx_url}}</span>
							<span v-if="toSina">{{data.share_info.title}}{{data.share_info.sina_url}}</span>
							<span v-if="toqq">{{data.share_info.title}}{{data.share_info.friend_url}}</span>
							<span v-if="toqqspace">{{data.share_info.title}}{{data.share_info.friend_url}}</span>
						</li>
						<li>长按文字及链接复制  分享给好友</li>
					</ul>
				</div>
				<div class="cancel" v-on:click="cancelToShare"></div>
			</div>
		</div>
</template>

<script>
	export default{
		props:['data','cancelShare','type'],
		data(){
			return {
				toWx:false,
				toSina:false,
				toqq:false,
				toqqspace:false
			}
		},
		methods:{
			cancelToShare(){
				this.$emit('cancelBox','cancelShare')
			},
			shareType(){
				switch(this.type){
					case 'wx': {
						this.toWx=true;
						this.toSina=false;
						this.toqq=false;
						this.toqqspace=false;
					}break;
					case 'sina': {
						this.toWx=false;
						this.toSina=true;
						this.toqq=false;
						this.toqqspace=false;
					}break;
					case 'qq' : {
						this.toWx=false;
						this.toSina=false;
						this.toqq=true;
						this.toqqspace=false;
					};break;
					case 'qqspace' :{
						this.toWx=false;
						this.toSina=false;
						this.toqq=false;
						this.toqqspace=true;
					}break;
				}
				console.log(this.data)
			}
		},
		computed:{
			
		},
		mounted(){
			this.shareType();
		}
	}
	
</script>

<style lang="scss">
	@import "../../../styles/app.scss";
	@import "../styles/goToShare.scss";
</style>