import React from 'react';
import {setConfig} from "react-hot-loader";
import {hot} from "react-hot-loader/root";

import './public_page.scss';


// NOTE ishan 2019-01-30 This configuration of react-hot-loader is optional
setConfig({
	pureRender: true, // RHL will not change render method
});

class PublicPageComponent extends React.Component {

	render() {
		console.log('%c PublicPageComponent.render()', 'color: green');
		return (
			<div className='container'>
				<header role='banner'>
					<h1>Labelr</h1>
				</header>
				<div>
					<p>We label stuff for you, because, we can&trade;</p>
					<a href='/repos' className='button button-large'>
						<span className='mega-octicon octicon-mark-github'/> Login with GitHub
					</a>
				</div>
			</div>
		);
	}

	componentWillUnmount() {
		console.log('%c PublicPageComponent.componentWillUnmount()', 'color: red');
	}

}

export default hot(PublicPageComponent);
