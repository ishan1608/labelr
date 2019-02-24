const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',  // eval-cheap-module-source-map <-- another option

	entry: [
		'webpack/hot/only-dev-server',  // HMR in the browser
		'react-hot-loader/patch', // RHL patch
	],

	devServer: {
		hot: true,  // Enable HMR
		contentBase: APP_DIR,  // Content Base --> APP_DIR
		historyApiFallback: true,
	},

	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),  // Generates hot update chunks
	],
});
