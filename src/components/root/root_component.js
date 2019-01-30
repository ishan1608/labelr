import React from "react";
import './root_style.scss';

import LikeCounterComponent from "../like_counter/like_counter_component";
import WebpackLogo from './webpack.svg';

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
