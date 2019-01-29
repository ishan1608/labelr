import React from 'react';

class ReposPageComponent extends React.Component {

	render() {
		console.log('%c ReposPageComponent.render()', 'color: green');
		return <div><h1>Repos Page</h1></div>;
	}

	componentWillUnmount() {
		console.log('%c ReposPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default ReposPageComponent;
