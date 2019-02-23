import app from 'ampersand-app';
import qs from 'qs';
import React from 'react';
import Router from 'ampersand-router';
import ReactDOM from 'react-dom';
import uuid from 'node-uuid';
import xhr from 'xhr';

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
		'auth/callback?:query': 'authCallback',
		'logout': 'logout',
	},

	renderPage: (page, opts = {layout: true}) => {
		if (opts.layout) {
			page = (
				<Layout me={app.me}>
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
		this.renderPage(<ReposPageComponent repos={app.me.repos}/>);
	},

	login() {
		let state = uuid();
		window.localStorage.setItem('state', state);
		let githubOAuthQueryString = qs.stringify({
			client_id: 'f41f0c7ce8df2861075d',
			redirect_uri: `${window.location.origin}/auth/callback`,
			scope: 'user,repo',
			state: state
		});
		window.location = `https://github.com/login/oauth/authorize?${githubOAuthQueryString}`
	},

	authCallback(query) {
		let oauthResponse = qs.parse(query);
		let state = window.localStorage.getItem('state');
		console.log('Response from Github Callback');
		console.log(oauthResponse);
		if (oauthResponse.state === state) {
			console.log('State matches');
			window.localStorage.removeItem('state');
			// Send request to the gatekeeper to get access token
			xhr({
				url: `https://labelr-ishan1608-localhost.herokuapp.com/authenticate/${oauthResponse.code}`,
				json: true
			}, (err, resp, body) => {
				if (err) {
					return console.error('Something wrong happened while authenticating');
				}
				app.me.token = body.token;
				this.redirectTo('/repos');
			});
		} else {
			console.error(`Github OAuth state: ${state} does not match with returned state: ${oauthResponse.state}`);
		}
	},

	logout() {
		window.localStorage.clear();
		window.location = '/';
	}
});
