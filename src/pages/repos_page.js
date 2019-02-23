import React from 'react';
import {hot} from "react-hot-loader/root";
import {setConfig} from "react-hot-loader";
import ampersandReactAdapter from 'ampersand-react-adapter';


setConfig({
	pureRender: true, // RHL will not change render method
});

class ReposPageComponent extends React.Component {

	render() {
		console.log('%c ReposPageComponent.render()', 'color: green');
		const {repos} = this.props;
		return (
			<div>
				<h1>Repos Page</h1>
				{repos.map((repo) => {
					return (
						<div key={repo.full_name}>
							<a href={'#'}>{repo.full_name}</a>
						</div>
					);
				})}
			</div>
		);
	}

	componentWillUnmount() {
		console.log('%c ReposPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default hot(ampersandReactAdapter(ReposPageComponent));
