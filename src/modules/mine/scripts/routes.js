import Mine from "../components/mine.vue";
import Login from "../components/login.vue";
import Register from '../components/register.vue';
import Setting from '../components/setting.vue';

export default [
    {
        path: '/Mine',
        component: Mine,
        name: 'Mine',
        children: [
            {
                path: '/Mine/Setting',
                component: Setting,
                name: 'Setting'
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
    // {
    //     path: '/Setting',
    //     component: Setting,
    //     name: 'Setting'
    // }
]