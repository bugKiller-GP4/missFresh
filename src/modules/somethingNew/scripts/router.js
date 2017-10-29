import index from "../components/index.vue";
import welfare from "../../welfare/components/index.vue";

export default[
    {
		path:'/somethingNew',
        component:index,
		children:[
			
		]
    },
    {
        path:'/welfare',
        component:welfare
    }
]