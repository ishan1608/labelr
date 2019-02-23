import React from 'react';
import 'bootstrap';
import app from 'ampersand-app';

import './styles/styles.scss';
import './styles/main.styl';

import Router from './router';
import Me from './models/me';


app.extend({
	init() {
		this.me = new Me();
		this.me.fetchInitialData();
		this.router = new Router();
		this.router.history.start();
	}
});

// Setting a browser
// TODO: This should be set only in development environment
window.app = app;

app.init();
