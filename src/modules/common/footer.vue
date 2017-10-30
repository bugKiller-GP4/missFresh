<template lang="html">
	<div>
		<ul>
			<router-link tag="li" :to="{name : 'hot'}" active-class="active">
				<i class="iconfont">&#xe607;</i>
				<p>首页</p>
			</router-link>
			<router-link tag="li" :to="{name : 'somethingNew'}" active-class="active">
				<i class="iconfont">&#xe623;</i>
				<p>新鲜事</p>
			</router-link>
			<router-link tag="li" :to="{name : 'welfare'}" active-class="active">
				<i class="iconfont">&#xe62c;</i>
				<p>福利</p>
			</router-link>
			<router-link tag="li" :to="{name : 'cart'}" active-class="active">
				<i class="iconfont">&#xe627;</i>
				<p>购物车</p>
			</router-link>
			<router-link tag="li" :to="{name : 'mine'}" active-class="active">
				<i class="iconfont">&#xe647;</i>
				<p>我的</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import "./footer.scss";
</style>