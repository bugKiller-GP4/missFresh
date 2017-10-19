import vue from "vue";
import index from "../components/index.vue"
var vm = new vue({
	el : "#app",
	components : {
		Index : index
	}
})
