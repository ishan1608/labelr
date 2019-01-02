import React from "react";

import LikeCounter from "./like_counter";

class Root extends React.Component {
	render() {
		return <div>
			<p>Hello, {this.props.name}</p>
			<LikeCounter/>
		</div>;
	}
}

export default Root;
