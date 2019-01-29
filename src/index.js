import React from 'react';
import 'bootstrap';
import './styles.scss';  // const styles = require('./styles.scss'); <-- Also works

import Router from './router';


window.app = {
	init() {
		this.router = new Router();
		this.router.history.start();
	}
};

window.app.init();
