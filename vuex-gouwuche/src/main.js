import Vue from "vue"
import Vuex from "vuex"
import App from "./components/App.vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(Vuex)
Vue.use(VueAxios,axios)

let store=new Vuex.Store({
	state:{
		count:1,
		price:10,
		sum:10,
		check:false,
		heji:0,
		data:null
	},
	actions:{
		getdata({commit},_this){
			_this.axios.get("/data").then(function(res){
				// console.log(res.data.json)
				commit("getjson",res.data)
			})
		}
	},
	mutations:{
		getjson(state,data){	
			state.data=data.json;
			// console.log(state.data);
		},
		add(state,index){
			console.log(state.data[index])
			// state.data[index].count++
			state.count++
			state.sum=state.price*state.count
		},
		jian(state){
			state.count--
			if(state.count<0){
				state.count=0;
			}
			state.sum=state.price*state.count
		},
		ckeckboxs(state){
			console.log(state.check);
			state.check=!state.check
			state.heji=state.price*state.count;
			// console.log(state.heji);
		}
	},
	getters:{
			
	}
})
let app=new Vue({
	el:"#app",
	store,
	render:xx=>xx(App)
})