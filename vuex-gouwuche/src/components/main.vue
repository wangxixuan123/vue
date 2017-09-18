<template>
  <section class="content">
	  <div class="main" v-for="(i,index) in jsons">
			<div class="top">
				<p class="small"><span></span></p>
				<p>
					<span class="sps"><img :src="i.img1" alt=""></span>
					<span class="tlt">{{i.title}}</span>
				</p>
			</div>
			<div class="bottom">
				<p class="yuan"><span :class='check?"bg":""' @click="ckeckboxs"></span></p>
				<p><img :src="i.img2" alt=""></p>
				<div class="right">
					<span>{{i.cont}}</span>
					 <div class="box">
              <span class="price">￥{{sum}}</span>
              <p class="box_p">
                <span class="jian" @click="jian(index)">{{i.jian}}</span>
                <span class="val">{{count}}</span>
                <span class="add"  @click="add(index)">{{i.plus}}</span>
              </p>
          </div>
				</div>			
			</div>
		</div>
  </section>
</template>
<script>
  import {mapState,mapMutations,mapActions} from "vuex"
	export default{
		data(){
			return{
				
			}
		},
    props:["jsons"],
    computed:({
      ...mapState(["count","sum","check"]),

    }),
    methods:{
      ...mapMutations(["add","jian","ckeckboxs"]),
     
    }

	}
</script>
<style>
    .content{width:100%;flex:1;overflow-y:scroll;}
    .main{margin-top:10px;width:100%;background:#fff;margin-top:10px;}
    .top{width:100%;height:25px;line-height:25px;border-bottom:1px solid #eee;display:flex;}
    .yuan,.small{padding-left:10px;}
    .small span{width:15px;height:15px;display:inline-block;border-radius:50%;border:1px solid #999;}
    .yuan span{width:15px;height:15px;display:inline-block;border-radius:50%;border:1px solid #999;margin-top:15px;}
    .sps{padding-left:10px;}
    .sps img{width:17px;height:17px;}
    .tlt{font-size:14px;padding-bottom:5px;}
    .bottom{width:100%;padding-top:10px;position:relative;border-bottom:1px solid #eee;display:flex;position:relative;}
    .bottom p:nth-child(2) img{width:70px;height:60px;}
    .right{padding-left:8px;}
    .right span{font-size:14px;font-weight:600;}
    .box{display:flex;padding-top:5px;justify-content:space-between;}
    .box_p span{display: inline-block;width:20px;height:27px;line-height: 27px;text-align:center;border:1px solid #ccc;cursor: pointer;}
    .box_p{position:absolute;right:10px;bottom:10px;}
    .price{padding-top:12px;color:#f35b10;font-weight:600;}
    .box_p .val{width:28px;height:25px;line-height:25px;}
    .yuan span.bg{background: #ff6501;border-color:#fff;}
</style>
