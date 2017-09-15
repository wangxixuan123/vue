var webpack=require("webpack"),
	HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:__dirname+"/src/main.js",
	output:{
		path:__dirname+"/dist",
		filename:"[name].js",
		chunkFilename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.vue$/,
				loader:"vue-loader"
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
				test:/\.png |.jpg$/,
				loader:"url-loader"
			}
		]
	},
	devServer:{
		port:9999,
		host:"localhost",
		hot:true,
		contentBase:__dirname + '/src/static',
		watchContentBase: true,
		setup(app){
            		app.get('/some/path', function(req, res) {
                		res.json({ custom:[
                				{
			name:"音乐"
		},
		{
			name:"历史"
		},
		{
			name:"情感生活"
		},
		{
			name:"人文"
		},
		{
			name:"音乐"
		},
		{
			name:"历史"
		},
		{
			name:"情感生活"
		},
		{
			name:"人文"
		}
                			]});
            		});
       			}
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons",
        }),
        new HtmlWebpackPlugin({
        	template:"./index.html"
        })
	],
	resolve: {
        alias:{
            "vue":"vue/dist/vue.js"
        }
    }
}