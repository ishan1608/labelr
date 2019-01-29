import React from 'react';
import RootComponent from '../components/root/root_component';

class PublicPageComponent extends React.Component {

	render() {
		console.log('%c PublicPageComponent.render()', 'color: green');
		return <RootComponent name="Webpack!"/>;
	}

	componentWillUnmount() {
		console.log('%c PublicPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default PublicPageComponent;
