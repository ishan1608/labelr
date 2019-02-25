import React from "react";
import {hot} from "react-hot-loader/root";
import {setConfig} from "react-hot-loader";

setConfig({
	pureRender: true, // RHL will not change render method
});


class RepoDetailPageComponent extends React.Component {

	render() {
		const {repo, labels} = this.props;
		return (
			<div>
				<h1>Repo: {repo.name}</h1>
				<p>{repo.full_name}</p>
				<div>
					<h2>Labels</h2>
					<ul>
						{labels.map((label) => {
							return (<li key={label.id}>{label.name}</li>);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default hot(RepoDetailPageComponent);
