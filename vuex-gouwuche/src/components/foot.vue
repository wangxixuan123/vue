<template>
	<footer class="foot">
	<div class="foot_top">
		<p class="yuan"><span></span><b>全选</b></p>
		<div class="foot_right">
			<p>合计:<span>￥{{heji}}</span></p>
			<p>结算<span>(0)</span></p>
		</div>
	</div>
	<div class="foot_bottom">
		<ul class="uls">
		<li>
			<i class="fa fa-home"></i>
			<span>首页</span>
		</li>
		<li>
			<i class="fa fa-bullseye"></i>
			<span>微淘</span>
		</li>
		<li>
			<i class="fa fa-comment-o"></i>
			<span>消息</span>
		</li>
		<li class="foot_color">
			<i class="fa fa-truck"></i>
			<span>购物车</span>
		</li>
		<li>
			<i class="fa fa-user-o"></i>
			<span>我的</span>
		</li>
	</ul>
	</div>
	
</footer>
</template>
<script>
	import {mapState,mapMutations,mapActions} from "vuex"
	export default{
		data(){
			return{

			}
		},
		computed:({
	      ...mapState(["heji"]),

	    }),
    	methods:{
	      ...mapMutations(["ckeckboxs"]),
	     
	    }
		
	}
</script>
<style>
	.foot{width:100%;background:#fff;border-top:1px solid #eee;position:fixed;bottom:0px;}
	.foot_top{
    height:40px;
    line-height:40px;
    display:flex;
    justify-content:space-between;}
    .yuan b{padding-left:5px;font-size:14px;}
     .foot_right{
        display:flex;}
      .foot_right p:nth-child(1){
          font-size:14px;
          padding-right:5px;}
       .foot_right p:nth-child(1) span{
            font-size:12px;
            color:#ce551c;
         }
    .foot_right p:nth-child(2){
          width:65px;
          height:40px;
          font-size:14px;
          line-height:40px;
          text-align:center;
          color:#fff;
          background:#fc8801;
        }
       .foot_bottom{
    height:45px; 
    border-top:1px solid #eee;}
    .foot_bottom ul{
      display: -webkit-flex;}
     .foot_bottom ul li{
          flex:1;
          text-align:center;
          color:#999;
          padding-top:5px;
          bos-sizing:border-box;}
       .foot_bottom ul li i{
            font-size:20px;
          }
          .foot_bottom ul li span{
            display:block;
            font-size:12px;
        
          }
</style>