import Vue from "vue"
import Router from "vue-router"
import index from "./components/index.vue"
import shouye from "./components/shouye.vue"
import find from "./components/find.vue"
import logo from "./components/logo.vue"
import main from "./components/main.vue"
import list from "./components/list.vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.use(VueAxios,axios)

let router=new Router({
	linkActiveClass:"active bg",
	routes:[
		{
			name:"index",
			path:"/",
			component:index,
			children:[{
	            path:'/',
	            redirect:'/main'
	        },
			{
				name:"hot",
				path:"hot",
				component:{
					template:"<div>hot</div>"
				}
			},
			{
				name:"main",
				path:"main",
				component:main
			},
			{
				name:"zhibo",
				path:"zhibo",
				component:{
					template:"<div>zhibo</div>"
				}
			},
			{
				name:"gubo",
				path:"gubo",
				component:{
					template:"<div>gubo</div>"
				}
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
		},
		{
			name:"list",
			path:"/list/:id",
			component:list
		}
	]
})
 Vue.use(Router)
new Vue({
	el:"#app",
	router
})