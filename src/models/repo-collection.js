import app from 'ampersand-app';
import Collection from 'ampersand-rest-collection';

import githubMixin from '../helpers/github-mixin';
import Repo from './repo';


export default Collection.extend({
	url: 'https://api.github.com/user/repos',

	model: Repo,

	getByFullName(fullName) {
		let model = app.me.repos.findWhere({
			full_name: fullName
		});

		if (!model) {
			model = new Repo({
				full_name: fullName
			});
		}

		// This is asynchronous and the data will not be available right away
		model.fetch();
		return model;
	}
}, githubMixin);
