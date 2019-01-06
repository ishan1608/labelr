import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';

import Root from './components/root';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component name="Webpack!"/>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(Root);

if (module.hot) {
	module.hot.accept('./components/root', () => {
		const NextRoot = require('./components/root').default;
		render(NextRoot);
	});
}
