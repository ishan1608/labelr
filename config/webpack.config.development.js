const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',  // eval-cheap-module-source-map <-- another option

	devServer: {
		hot: true,  // Enable HMR
		contentBase: APP_DIR,  // Content Base --> APP_DIR
	}
});
