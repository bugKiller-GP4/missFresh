<template lang="html">
	<div class="m-index">
		<header>
			<IndexHeader></IndexHeader>
		</header>
		<section>
			xinxianshi
		</section>
		<footer>
			<IndexFooter></IndexFooter>
		</footer>
	</div>
</template>

<script>
	import IndexFooter from "./footer.vue"
	import IndexHeader from "./header.vue"
	import IndexSection from "./section.vue"
	export default {
		data(){
			return  {
			}
		},
		methods : {
			getnum : function(title){
				console.log(title);
			}
		},
		components : {
			IndexFooter : IndexFooter,
			IndexHeader : IndexHeader,
			IndexSection : IndexSection
		}
	}
</script>

<style lang="scss">
	@import "../styles/index.scss";
</style>