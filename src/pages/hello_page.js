import React from 'react';
import {setConfig} from "react-hot-loader";
import {hot} from "react-hot-loader/root";

import RootComponent from '../components/root/root_component';


// NOTE ishan 2019-01-30 This configuration of react-hot-loader is optional
setConfig({
	pureRender: true, // RHL will not change render method
});

class HelloPageComponent extends React.Component {

	render() {
		console.log('%c HelloPageComponent.render()', 'color: green');
		return <RootComponent name="Webpack!"/>;
	}

	componentWillUnmount() {
		console.log('%c HelloPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default hot(HelloPageComponent);
