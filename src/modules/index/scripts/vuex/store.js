import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		type : 'hot',
		isInSearch : false,
		searchhis : [],
		goods_list : [],
		isLogin : false,
		newData:{}
		
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
		},
		add(state,data){
			var index = 0;
			state.goods_list.forEach(function(key,i){
				if(key.sku == data.sku){
					index = i
				}
			})
			this.newData = state.goods_list[index]
			this.newData.num += 1
			Vue.set(state.goods_list,index,this.newData)
		},
		min(state,data){
			var index = 0;
			state.goods_list.forEach(function(key,i){
				if(key.sku == data.sku){
					index = i
				}
			})
			this.newData = state.goods_list[index]
			this.newData.num -= 1
			if(this.newData.num==0){
				state.goods_list.splice(index,1)
			}else{
				Vue.set(state.goods_list,index,this.newData)
			}
			
		}
	}
})

export default store;