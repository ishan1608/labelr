import qs from 'qs';
import React from 'react';
import Router from 'ampersand-router';
import ReactDOM from 'react-dom';

import Layout from './pages/layout';
import HelloPageComponent from './pages/hello_page';
import ReposPageComponent from './pages/repos_page';
import PublicPageComponent from './pages/public_page';


export default Router.extend({
	routes: {
		'': 'public',
		'hello': 'hello',
		'repos': 'repos',
		'login': 'login',
		'auth/callback?code=:code': 'authCallback',
	},

	renderPage: (page, opts = {layout: true}) => {
		if (opts.layout) {
			page = (
				<Layout>
					{page}
				</Layout>
			);
		}
		ReactDOM.render(
			page,
			document.getElementById('root')
		);
	},

	public() {
		console.log('On public page');
		this.renderPage(<PublicPageComponent/>, {layout: false})
	},

	hello() {
		console.log('On hello page');
		this.renderPage(<HelloPageComponent/>, {layout: false});
	},

	repos() {
		console.log('On repos page');
		this.renderPage(<ReposPageComponent/>);
	},

	login() {
		let githubOAuthQueryString = qs.stringify({
			client_id: 'f41f0c7ce8df2861075d',
			redirect_uri: `${window.location.origin}/auth/callback`,
			scope: 'user,repo'
		});
		window.location = `https://github.com/login/oauth/authorize?${githubOAuthQueryString}`
	},

	authCallback(code) {
		console.log(`Code from Github Callback ${code}`);
	}
});
