import Model from 'ampersand-model';


export default Model.extend({
	props: {
		id: 'number',
		url: 'string',
		name: 'string',
		node_id: 'string',
		color: 'string',
		default: 'boolean',
	}
});
