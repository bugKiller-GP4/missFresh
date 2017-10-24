import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

new Vue({
    // el: '#app',
    // components: {
    //     Mine: Mine,
    //     Login : Login
    // }
    router
}).$mount('#app')