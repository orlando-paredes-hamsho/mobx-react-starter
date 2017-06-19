import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { PropTypes } from 'mobx-react';

import _ from 'lodash';

import Selection from './selection';
import Profile from './profile';

const propTypes = {
	store: PropTypes.object
};

//Observers can react (ba dum tss) to changes in observables
@observer
class App extends Component {

	componentWillMount() {
		this.props.store.getUsers();
	}

	renderSelection(){
		if (_.isEmpty(this.props.store.selectedUser)) return <noscript />;
		return (
			<div className='selection'>
				<Selection user={this.props.store.selectedUser}/>
				<button onClick={this.props.store.clearSelectedUser}>Close Profile</button>
			</div>
		);
	}

	renderProfiles(){
		return this.props.store.users.map((user) => {
			return (
				<Profile
					selected = {user.id === this.props.store.selectedId}
					key = {user.id}
					label = {user.name}
					onClick = { () => {this.props.store.selectUser(user);} }
					/>
			);
		});
	}

	render(){
		return (
			<div>
				<h3>Employee Directory</h3>
				{this.renderSelection()}
				{this.renderProfiles()}
			</div>
		);
	}
}

App.propTypes = propTypes;

export default App;
