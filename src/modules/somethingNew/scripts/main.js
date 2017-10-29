import vue from "vue";
import VueRouter from "vue-router";
import routes from './router'


vue.use(VueRouter);
const router = new VueRouter({
	routes
})
var vm = new vue({
	el : "#app",
	router: router 
})