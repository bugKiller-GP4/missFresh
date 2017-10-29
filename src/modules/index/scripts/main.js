import vue from "vue";
import VueRouter from "vue-router"
import Hot from "../components/hot.vue"
import Huoguo from "../components/huoguo.vue"
import Fruits from "../components/fruits.vue"
import index from "../components/index.vue"
import search from "../components/search.vue"
import detail from "../../detail-goods/components/detail-goods.vue"
import welfare from "../../welfare/components/index.vue"
import somethingNew from "../../somethingNew/components/index.vue"
import mine from "../../mine/components/mine.vue"
import login from "../../mine/components/login.vue"
import register from "../../mine/components/register.vue"
import setting from "../../mine/components/setting.vue"
import cart from "../../cart/components/index.vue"
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
		path : "/search",
		component : search,
		name : "search"
	},
	{
		path : "/detail",
		component : detail,
		name : "detail"
	},
	{
		path: "/welfare",
		component : welfare,
		name : "welfare"
	},
	{
		path:"/somethingNew",
		component: somethingNew,
		name : 'somethingNew'
	},
	{
		path:"/mine",
		component:mine,
		name : "mine"
	},
	{
		path:"/login",
		component:login,
		name : "login"
	},
	{
		path: '/register',
		component: register,
		name:'register'
	},
	{
		path: '/setting',
		component: setting,
		name: 'setting'
	},
	{
		path: '/cart',
		component : cart ,
		name : 'cart'
	}
	]
})

var vm = new vue({
	el : "#app",
	router : router
})
