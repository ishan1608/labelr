import React from "react";
import '../styles/main.css';  // const styles = require('../styles/main.css'); <-- Also works
import WebpackLogo from '../img/webpack.svg';

import LikeCounterComponent from "./like_counter";

class RootComponent extends React.Component {

	render() {
		console.log('%c RootComponent.render()', 'color: green');
		return <div className="root-component">
			<img className="webpack-logo" src={WebpackLogo}/>
			<p>Hello, {this.props.name}</p>
			<LikeCounterComponent/>
		</div>;
	}

	componentWillUnmount() {
		console.log('%c RootComponent.componentWillUnmount()', 'color: red');
	}

}

export default RootComponent;
