<template>
	<div>
		<header class="head">
			<span>购物车<b>(102)</b></span>
			<span>编辑</span>
		</header>
		<mains :jsons="data"></mains>
		<foots></foots>	
	</div>
</template>
<script>
	import main from "./main.vue"
	import foot from "./foot.vue"
	import {mapState,mapMutations,mapActions} from "vuex"
	export default{
		data(){
			return{

			}
		},
		created(){
	      this.getdata(this)
	    },
		components:{
			mains:main,
			foots:foot
		},
		computed:mapState(["data"]),
		methods:{
			 ...mapActions(["getdata"])
		}
	}
</script>
<style>
	.head{width:100%;height:45px;line-height:45px;background:#ff6501;
      		display:flex;color:#fff0cf;}
    .head span:nth-child(1){flex:1;text-align:center;padding-left:20px;box-sizing:border-box;}
    .head span:nth-child(1) b{font-size:12px;}    
    .head span:nth-child(2){padding-right:10px;font-size:12px;}
    
</style>