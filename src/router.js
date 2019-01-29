import Router from 'ampersand-router';

export default Router.extend({
	routes: {
		'': 'public',
		'repos': 'repos',
	},

	public() {
		console.log('On public page');
	},

	repos() {
		console.log('On repos page');
	}
});
