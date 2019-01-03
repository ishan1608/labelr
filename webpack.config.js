const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_DIR + '/index.js',
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
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})]
};
