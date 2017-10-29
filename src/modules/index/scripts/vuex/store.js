import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		type : 'hot',
		isInSearch : false,
		searchhis : [],
	},
	mutations : {
		update(state,newtype){
			state.type = newtype;
		},
		show(state,type){
			state.isInSearch = type;
		},
		addhis(state,item){
			var isExist = state.searchhis.filter(function(key){
				return key==item;
			});
			console.log(isExist);
			if(isExist.length==0){
				state.searchhis.push(item);
			}else{
				return ;
				
			}
		}
	}
})

export default store;