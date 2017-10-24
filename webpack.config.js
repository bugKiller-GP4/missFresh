var webpack = require('webpack')
var ExtrctTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

if(process.env.NODE_ENV === 'dev'){
	module.exports  = {
		entry : {
			'scripts/app' : "./src/scripts/app.js"
		},
		output : {
			filename : '[name].js',
			path : __dirname + '/dev'
		},
		devServer : {
			host : 'localhost',
			port : '5000',
			contentBase : __dirname + '/dev',
			noInfo : true,
			proxy: {
				'/api': {
					target: 'http://datainfo.duapp.com/shopdata/userinfo.php',
					changeOrigin: true,
					pathReWrite: {
						'^/api': ''
					} 
				}
			}
		},
		// devtool 配置
	  	devtool: 'source-map',
	  	
	  	resolve : {
	  		alias : {
	  			'vue$' : 'vue/dist/vue.js',
	  			'vue-router$' : 'vue-router/dist/vue-router.js'
	  		}
	  	},
	  	
		module : {
			rules : [
				{
					test : /\.js$/,
					exclude : /node_modules/,
					use : [
						{
							loader : 'babel-loader'
						}
					]
					
				},
				{
					test:/\.vue$/,
					exclude : /node_modules/,
					use : [
					{
						loader : 'vue-loader'
					}]
				},
				{
					test : /\.scss$/,
					use : ExtrctTextWebpackPlugin.extract({
						fallback : 'style-loader',					
						use : ['css-loader','sass-loader']
					})
					
				},
				{
					test : /\.css$/,
					use : [
						{
							loader:"style-loader"
						},
						{
							loader:"css-loader"
						}
					]
				},
				{
			        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 10,
			          name: 'media/images/[name].[ext]'
			        }
		      	},
			
			      // 加载媒体文件
		      	{
			        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 10,
			          name: 'media/mp4/[name].[ext]'
			        }
		      	},
			
			      // 加载iconfont
		      	{
			        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 10,
			          name: 'media/iconfont/[name].[ext]'
			        }
		      	}
			]
		},
		plugins : [
			new ExtrctTextWebpackPlugin({
				filename : (getpath)=>{
					return getpath('[name].css').replace('scripts','styles')
				},
				allChunks : true
			}),
			new HtmlWebpackPlugin({
				template : './src/index.html',
				filename : 'index.html'
			})
			
		]
		// externals:{
		// 	'vue': 'window.Vue',
		// 	'vue-router': 'window.VueRouter'
		// }
	}
}else{
	module.exports  = {
		entry : {
			'scripts/app' : "./src/scripts/app.js"
		},
		output : {
			filename : '[name]@[chunkhash:6].js',
			path : __dirname + '/prd'
		},
		// devtool 配置
	  	devtool: 'source-map',
	  	devServer : {
			host : 'localhost',
			port : '7000',
			contentBase : __dirname + '/prd',
			noInfo : true,
		},
		resolve : {
	  		alias : {
	  			'vue$' : 'vue/dist/vue.js',
	  			'vue-router$' : 'vue-router/dist/vue-router.js'
	  		}
	  	},
		module : {
			rules : [
				{
					test : /\.js$/,
					exclude : /node_modules/,
					use : [
						{
							loader : 'babel-loader'
						}
					]
					
				},
				{
					test:/\.vue$/,
					exclude : /node_modules/,
					use : [
					{
						loader : 'vue-loader'
					}]
				},
				{
					test : /\.scss$/,
					use : ExtrctTextWebpackPlugin.extract({
						fallback : 'style-loader',					
						use : ['css-loader','sass-loader']
					})
					
				},
				{
					test : /\.css$/,
					use : [
						{
							loader:"style-loader"
						},
						{
							loader:"css-loader"
						}
					]
				},
				{
			        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 1000,
			          name: 'media/images/[name].[hash:7].[ext]'
			        }
		      	},
			
			      // 加载媒体文件
		      	{
			        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 10000,
			          name: 'media/mp4/[name].[hash:7].[ext]'
			        }
		      	},
			
			      // 加载iconfont
		      	{
			        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 10000,
			          name: 'media/iconfont/[name].[hash:7].[ext]'
			        }
		      	}
			]
		},
		plugins : [
			new ExtrctTextWebpackPlugin({
				filename : (getpath)=>{
					return getpath('[name]@[chunkhash:6].css').replace('scripts','styles')
				},
				allChunks : true
			}),
			new HtmlWebpackPlugin({
				template : './src/index.html',
				filename : 'index.html'
			}),
			new webpack.optimize.UglifyJsPlugin({
		      compress: {
		        warnings: false
		      },
		    	except: ['$super', '$', 'exports', 'require']
		    }),
		]
		// externals:{
		// 	'vue': 'window.Vue',
		// 	'vue-router': 'window.VueRouter'
		// }
	}
}
