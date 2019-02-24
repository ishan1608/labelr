import React from 'react';
import {hot} from "react-hot-loader/root";
import {setConfig} from "react-hot-loader";
import ampersandReactAdapter from 'ampersand-react-adapter';

import InternalAnchor from "../components/utils/internal_anchor";


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
						<div key={repo.id}>
							<InternalAnchor href={repo.app_url}>{repo.full_name}</InternalAnchor>
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
