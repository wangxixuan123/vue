<template>
	<div>
		这是一个{{name}}页
	</div>
</template>
<script>
	export default {
		data(){
			return{

			}
		},
		created(){
			//动态路由的两种传参方式一种是用 params一种是require 一种是 :id

			// this.name=this.$route.params.nam
			this.name=this.$route.params.id
		}
	}
</script>