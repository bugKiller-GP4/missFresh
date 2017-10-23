import vue from "vue";
import VueRouter from "vue-router"
import Hot from "../components/hot.vue"
import Huoguo from "../components/huoguo.vue"
import Fruits from "../components/fruits.vue"
import index from "../components/index.vue"
import xinxianshi from "../components/xinxianshi.vue"
vue.use(VueRouter);

const router = new VueRouter({
	routes : [{
		path : "/index",
		component : index,
		redirect : "/index/hot",
		children : [
			{
				path : "/index/hot",
				component : Hot,
				name : 'hot'
			},
			{
				path : "/index/huoguo",
				component : Huoguo,
				name : 'huoguo'
			},
			{
				path : "/index/fruits",
				component : Fruits,
				name : 'fruits'
				
			}
		]
	},
	{
		path : "/xinxianshi",
		component : xinxianshi
	}]
})

var vm = new vue({
	el : "#app",
	router : router
})
