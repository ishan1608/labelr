import Model from 'ampersand-model';

import githubMixin from '../helpers/github-mixin';
import RepoCollection from './repo-collection';


// noinspection JSUnusedGlobalSymbols
export default Model.extend({
	url: 'https://api.github.com/user',

	initialize() {
		this.token = window.localStorage.token;
		this.on('change:token', this.onChangeToken);
	},

	props: {
		id: 'number',
		login: 'string',
		avatar_url: 'string',
	},

	session: {
		token: 'string',
	},

	collections: {
		repos: RepoCollection
	},

	onChangeToken() {
		window.localStorage.token = this.token;
		this.fetchInitialData();
	},

	fetchInitialData() {
		this.fetch();
		this.repos.fetch();
	}
}, githubMixin);
