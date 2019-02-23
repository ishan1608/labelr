import Collection from 'ampersand-rest-collection';

import githubMixin from '../helpers/github-mixin';
import Repo from './repo';


export default Collection.extend({
	url: 'https://api.github.com/user/repos',

	modal: Repo
}, githubMixin);
