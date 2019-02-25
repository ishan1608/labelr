import Model from 'ampersand-model';
import LabelCollection from './label-collection';


export default Model.extend({
	url() {
		return `https://api.github.com/repos/${this.full_name}`;
	},

	props: {
		id: 'number',
		name: 'string',
		full_name: 'string'
	},

	derived: {
		app_url: {
			deps: ['full_name'],
			fn() {
				return `repo/${this.full_name}`;
			}
		}
	},

	collections: {
		labels: LabelCollection
	},

	fetch() {
		// Fetch this
		Model.prototype.fetch.apply(this, arguments);
		// Fetch labels
		this.labels.fetch();
	}
});
