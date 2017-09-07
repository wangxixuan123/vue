var webpack=require("webpack"),
	HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:__dirname+"/js/main.js",
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader",
			},
			{
				test:/\.css$/,
				use:["style-loader","css-loader"]
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.png|.jpg$/,
				loader:"url-loader"
			}
		]
	},
	devServer:{
		port:9000,
		host:"localhost",
		hot:true,
		setup(app) {
            app.get('/some/path', function(req, res) {             		
                res.json({ 
                	custom:[
							{
								"img":"images/logo_02.png",
								"content":"一声问候",
								"friden":"朋友生日就要到了,送个祝福吧",
								"time":"14:17",
								"num":1,
								"clas":"news"
							},
							{
								"img":"images/logo_03.png",
								"content":"购物号",
								"friden":"[新消息]拼多多商城:活动参与",
								"time":"12:58",
							},
							{
								"img":"images/logo_04.png",
								"content":"服务号",
								"friden":"QQ团队:举手比心也能做公益？",
								"time":"12:57",
							},
							{
								"img":"images/logo_05.png",
								"content":"陶鹏",
								"friden":"我要吃肉",
								"time":"12:30",
								"num":5,
								"clas":"news"
							},
							{
								"img":"images/logo_06.png",
								"content":"通讯新闻",
								"friden":"大妈卖鱼被'咬'住手",
								"time":"12:05",
							},
							{
								"img":"images/logo_07.png",
								"content":"网站1506A",
								"friden":"放假了",
								"time":"11:53",
							},
							{
								"img":"images/logo_08.png",
								"content":"我的电脑",
								"friden":"你已在电脑登录,可传文件到电脑",
								"time":"8:53",
							}
						]

                });
            });
       	}

	},
	plugins:[
		// new webpack. optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        	template:"./index.html"
        })

	]
}