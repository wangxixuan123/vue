<template>
	<div class="boxs">
		<div class="nav">
			<ul>
				<router-link tag="li" to='hot'>热门</router-link>
				<router-link tag="li" to='main'>精品</router-link>
				<router-link tag="li" to='zhibo'>直播</router-link>
				<router-link tag="li" to='gubo'>广播</router-link>
			</ul>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:"index",
		data(){
			return{
				data:""
			}
		},
		
		
	}  
</script>
<style>
	.nav{width:100%;background:#f5f5f5;}
	.nav ul {display: -webkit-flex; }
    .nav ul li {flex: 1;text-align: center;height:35px;line-height:35px;font-size:14px;}
</style>