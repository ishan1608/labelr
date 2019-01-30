import React from 'react';
import Router from 'ampersand-router';
import ReactDOM from 'react-dom';

import PublicPageComponent from './pages/public_page';
import ReposPageComponent from './pages/repos_page';


const renderRootComponent = (AppComponent) => {
	ReactDOM.render(
		<AppComponent/>,
		document.getElementById('root')
	);
};

export default Router.extend({
	routes: {
		'': 'public',
		'repos': 'repos',
	},

	public() {
		console.log('On public page');
		renderRootComponent(PublicPageComponent);
	},

	repos() {
		console.log('On repos page');

		renderRootComponent(ReposPageComponent);
	}
});
