import Vue from "../vue.js"
import Router from "vue-router"
import index from "./components/index.vue"
import shouye from "./components/shouye.vue"
import find from "./components/find.vue"
import logo from "./components/logo.vue"
import hot from "./components/hot.vue"
let router=new Router({
	// linkActiveClass:"bg",
	routes:[
		{
			name:"index",
			path:"/",
			component:index,
			children:[{
				name:"hot",
				path:"hot",
				component:hot
			}]
		},
		{
			name:"shouye",
			path:"/shouye",
			component:shouye
		},
		{
			name:"find",
			path:"/find",
			component:find
		},
		{
			name:"logo",
			path:"/logo",
			component:logo
		}
	]
})
Vue.use(Router)
new Vue({
	el:"#app",
	router
})