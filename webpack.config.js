const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_DIR + '/index.js',
	output: {
		filename: 'index-bundle.js',
		path: BUILD_DIR
	}
};
