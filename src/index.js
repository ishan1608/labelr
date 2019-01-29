import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import 'bootstrap';
import './styles.scss';  // const styles = require('./styles.scss'); <-- Also works

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
	module.hot.accept(RootComponent, () => {
		const NextRootComponent = RootComponent;
		renderRootComponent(NextRootComponent);
	});
}
