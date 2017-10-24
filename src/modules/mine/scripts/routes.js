import Mine from "../components/mine.vue";
import Login from "../components/login.vue";
import Register from '../components/register.vue';


export default [
    {
        path: '/Mine',
        component: Mine,
        name: 'Mine'
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