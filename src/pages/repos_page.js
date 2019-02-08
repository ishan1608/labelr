import React from 'react';
import {hot} from "react-hot-loader/root";

import LikeCounterComponent from '../components/like_counter/like_counter_component';


class ReposPageComponent extends React.Component {

	render() {
		console.log('%c ReposPageComponent.render()', 'color: green');
		return (
			<div>
				<h1>Repos Page</h1>
				<LikeCounterComponent/>
			</div>
		);
	}

	componentWillUnmount() {
		console.log('%c ReposPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default hot(ReposPageComponent);
