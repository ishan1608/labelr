import React from "react";
import './root_style.css';  // const styles = require('./root_style.css'); <-- Also works
import WebpackLogo from './webpack.svg';

import LikeCounterComponent from "../like_counter/like_counter_component";

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
