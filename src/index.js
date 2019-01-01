import _ from 'lodash';
import React from "react";
import ReactDOM from 'react-dom';

function component() {
	let element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());

class Hello extends React.Component {
	render() {
		return <div>Hello, {this.props.name}</div>;
	}
}

ReactDOM.render(<Hello name="Webpack!"/>, document.body);
