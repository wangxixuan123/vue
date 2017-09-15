<template>
	<main class="main">
		<template  >
			<ul>
				<!-- <router-link v-for="i in json" tag="li" :to="{name:'list',params:{nam:i.name}}">{{i.name}}</router-link> -->
				<li v-for="i in json" @click="fn(i.name)">{{i.name}}</li>
			</ul>
		</template>
	</main>
</template>
<script>
// var datas=[
// 		{
// 			name:"音乐"
// 		},
// 		{
// 			name:"历史"
// 		},
// 		{
// 			name:"情感生活"
// 		},
// 		{
// 			name:"人文"
// 		},
// 		{
// 			name:"音乐"
// 		},
// 		{
// 			name:"历史"
// 		},
// 		{
// 			name:"情感生活"
// 		},
// 		{
// 			name:"人文"
// 		}

// 	]
	export default{
		data(){
			return{
				json:""
			}
		},
		methods:{
			fn(i){
				this.$router.push({
					path:"/list/"+i
				})
			}

		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				vm.axios.get('/some/path').then(function(res){
					// console.log(res.data.custom);
					vm.json=res.data.custom;
					console.log(vm.json);
					
				}).catch(function(err){console.log(err);})
			})
			
		},
		// beforeRouteUpdate(to,from,next){
		// 	console.log("beforeRouteUpdate");
		// 	next()
		// }

	}
</script>
<style>
	.main{margin-top:5px;}
	.main ul {flex-wrap:wrap;display: -webkit-flex;}
    .main ul li {width:24%;text-align: center;padding:30px 10px;font-size:14px;margin:1px;box-sizing:border-box;background:#eee;}
  
</style>