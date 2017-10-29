import Mine from "../components/mine.vue";
import Login from "../components/login.vue";
import Register from '../components/register.vue';
import setting from '../components/setting.vue';

export default [
    {
        path: '/mine',
        component: Mine,
        name: 'Mine',
        children: [
            {
                path: '/mine/setting',
                component: setting,
                name: 'setting'
            }
        ] 
    },
    {
        path: '/Login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/Register',
        component: Register,
        name: 'Register'
    }
]