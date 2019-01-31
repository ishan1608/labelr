import React from 'react';
import Router from 'ampersand-router';
import ReactDOM from 'react-dom';

import HelloPageComponent from './pages/hello_page';
import ReposPageComponent from './pages/repos_page';
import PublicPageComponent from './pages/public_page';


const renderRootComponent = (AppComponent) => {
	ReactDOM.render(
		<AppComponent/>,
		document.getElementById('root')
	);
};

export default Router.extend({
	routes: {
		'': 'public',
		'hello': 'hello',
		'repos': 'repos',
	},

	public() {
		console.log('On public page');
		renderRootComponent(PublicPageComponent)
	},

	hello() {
		console.log('On hello page');
		renderRootComponent(HelloPageComponent);
	},

	repos() {
		console.log('On repos page');

		renderRootComponent(ReposPageComponent);
	}
});
