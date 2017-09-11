import Vue from "vue"
import index from "./components/Index.vue"
new Vue({
	el:"#app",
	render(h){
		return h(index)
	}
	
})