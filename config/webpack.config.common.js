const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const yeticss = require('yeticss');

const BUILD_DIR = path.resolve(__dirname, '../dist');
const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',  // Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server',  // HMR in the browser
		'react-hot-loader/patch', // RHL patch
		path.resolve(APP_DIR, 'index.js')  // App's entry point
	],
	output: {
		filename: 'index-bundle.js',
		path: BUILD_DIR,
		publicPath: '/'  // Prefixed to every URL created by runtime or loaders
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['react-hot-loader/babel']
					}
				}
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run postcss actions
					options: {
						plugins: function () { // postcss plugins, can be exported to postcss.config.js
							return [
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}, {
				test: /\.styl$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'stylus-loader' // compiles Stylus to CSS
				}]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),  // Cleans the `dist` folder
		new webpack.HotModuleReplacementPlugin(),  // Generates hot update chunks
		new HtmlWebpackPlugin({
			template: path.resolve(APP_DIR, 'index.html'),  // Template for index.html
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.styl$/, // apply only for *.styl files
			options: {
				// configure stylus loader to use the yeticss plugin
				stylus: {
					use: [yeticss()]
				}
			}
		})
	],
};
