import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		type : 'hot',
		isInSearch : false,
		searchhis : [],
		goods_list : [],
		
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
		},
		addtocarts(state,item){
			var res = state.goods_list.filter(function(key){
				return key.sku==item.sku;
			})
			if(res.length==0){
				item.num = 1;
				state.goods_list.push(item);
			}else{
				for(var i=0;i<state.goods_list.length;i++){
					if(state.goods_list[i].sku==item.sku){
						state.goods_list[i].num++;
					}
				}
			}
		}
	}
})

export default store;