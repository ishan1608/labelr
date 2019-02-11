import Model from 'ampersand-model';


export default Model.extend({
	initialize() {
		this.token = window.localStorage.token;
		this.on('change:token', this.onChangeToken);
	},

	props: {
		id: 'string',
		login: 'string',
		avatar_url: 'string',
	},

	session: {
		token: 'string',
	},

	onChangeToken() {
		window.localStorage.token = this.token;
	}
});
