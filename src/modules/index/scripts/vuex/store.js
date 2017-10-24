import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		type : 'hot',
		isInSearch : false
	},
	mutations : {
		update(state,newtype){
			state.type = newtype;
		},
		show(state,type){
			state.isInSearch = type;
		}
	}
})

export default store;