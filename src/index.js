import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import RootComponent from './components/root/root_component';

const renderRootComponent = (AppComponent) => {
	ReactDOM.render(
		<AppContainer>
			<AppComponent name="Webpack!"/>
		</AppContainer>,
		document.getElementById('root')
	);
};

// initial render
renderRootComponent(RootComponent);

if (module.hot) {
	// hot module reloading for RootComponent
	module.hot.accept('./components/root/root_component', () => {
		const NextRootComponent = require('./components/root/root_component').default;
		renderRootComponent(NextRootComponent);
	});
}
