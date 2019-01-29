import React from 'react';
import Router from 'ampersand-router';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import PublicPageComponent from './pages/public';

const renderRootComponent = (AppComponent) => {
	ReactDOM.render(
		<AppContainer>
			<AppComponent/>
		</AppContainer>,
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
		// initial render
		renderRootComponent(PublicPageComponent);

		// TODO ishan 2019-01-30 Need to figure out a way to not duplicate the hot module reload part as
		//  require.resolve is not a good practice as mentioned here:
		//  https://github.com/webpack/webpack/issues/1790#issuecomment-170231578
		if (module.hot) {
			// hot module reloading for RootComponent
			module.hot.accept('./pages/public', () => {
				const NextRootComponent = require('./pages/public').default;
				renderRootComponent(NextRootComponent);
			});
		}
	},

	repos() {
		console.log('On repos page');
	}
});
