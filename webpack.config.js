const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',  // Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server',  // HMR in the browser
		'react-hot-loader/patch', // RHL patch
		APP_DIR + '/index.js'  // App's entry point
	],
	output: {
		filename: 'index-bundle.js',
		path: BUILD_DIR
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
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),  // Generates hot update chunks
		new HtmlWebpackPlugin({
			template: 'src/index.html',  // Template for index.html
		})
	],
	devServer: {
		hot: true,  // Enable HMR
		contentBase: APP_DIR,  // Content Base --> APP_DIR
	}
};
