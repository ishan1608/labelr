import React from 'react';
import 'bootstrap';
import './styles.scss';  // const styles = require('./styles.scss'); <-- Also works
import app from 'ampersand-app';

import Router from './router';


app.extend({
	init() {
		this.router = new Router();
		this.router.history.start();
	}
});

// Setting a browser
// TODO: This should be set only in development environment
window.app = app;

app.init();
