import React from "react";
import {hot} from "react-hot-loader/root";
import {setConfig} from "react-hot-loader";

setConfig({
	pureRender: true, // RHL will not change render method
});


class RepoDetailPageComponent extends React.Component {

	render() {
		const {repo} = this.props;
		return (
			<div>
				<h1>Repo: {repo.name}</h1>
				<p>{repo.full_name}</p>
			</div>
		);
	}
}

export default hot(RepoDetailPageComponent);
