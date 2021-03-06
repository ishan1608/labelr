import React from 'react';
import ampersandReactAdapter from 'ampersand-react-adapter';

import InternalAnchor from '../components/utils/internal_anchor';

class Layout extends React.Component{

	render() {
		console.log('%c Layout.render()', 'color: green');
		const {me} = this.props;
		return (
			<div>
				<nav className='top-nav top-nav-light cf' role='navigation'>
					<input id='menu-toggle' className='menu-toggle' type='checkbox'/>
					<label htmlFor='menu-toggle'>Menu</label>
					<ul className='list-unstyled list-inline cf'>
						<li>Labelr</li>
						<li><InternalAnchor href='/repos'>Repos</InternalAnchor></li>
						<li className='pull-right'>{me.login} <InternalAnchor href='/logout'>Logout</InternalAnchor></li>
					</ul>
				</nav>
				<div className='container'>
					{this.props.children}
				</div>
			</div>
		);
	}

	componentWillUnmount() {
		console.log('%c Layout.componentWillUnmount()', 'color: red');
	}
}

export default ampersandReactAdapter(Layout);
