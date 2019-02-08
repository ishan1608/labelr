import React from 'react';
import localLinks from 'local-links';

import app from 'ampersand-app';


class InternalAnchor extends React.Component {

	onClick(event) {
		let pathName = localLinks.getLocalPathname(event);
		if (pathName) {
			event.preventDefault();
			app.router.history.navigate(pathName);
		}
	}

	render() {
		return (
			<a {...this.props} onClick={this.onClick}>
				{this.props.children}
			</a>
		);
	}
}

export default InternalAnchor;
