<template>
	<div class="boxs">
		<div class="nav">
			<ul>
				
				<router-link to="{name:'hot'}" tag="li">热门</router-link>
				<router-view></router-view>
				<!-- <li>热门</li> -->
				<li class="bg">分类</li>
				<li>精品</li>
				<li>直播</li>
				<li>广播</li>
			</ul>
		</div>
		<mains></mains>
	</div>
</template>
<script>
	import main from "./main.vue"
	export default{
		data(){
			return{

			}
		},
		components:{
			mains:main
		}
	}
</script>
<style>
	.nav{width:100%;background:#f5f5f5;}
	.nav ul {display: -webkit-flex; }
    .nav ul li {flex: 1;text-align: center;height:35px;line-height:35px;font-size:14px;}
</style>