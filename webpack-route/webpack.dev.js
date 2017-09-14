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
	]
}