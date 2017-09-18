var webpack=require("webpack"),
	HtmlWebpackPlugin=require("html-webpack-plugin"),
	data=require('./src/data/data.js');
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
				test:/\.png|.jpg$/,
				loader:"url-loader"
			}
		]
	},
	devtool:"cheap-module-eval-source-map",
	devServer:{
		hot: true,
		port: 9999,
        host: 'localhost',
        contentBase:__dirname + '/src/static',
		watchContentBase: true,
		setup(app) {
            app.get('/data', function(req,res) {
                // console.log(querystring.parse(url.parse(req.url)))
                res.json(data);
            });
       }
	},
	resolve:{
		alias:{
			"vue":"vue/dist/vue.js"
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
	]
}