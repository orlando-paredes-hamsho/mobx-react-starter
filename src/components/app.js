import React, { Component } from 'react';
import axios from 'axios';

import Profile from './profile';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = { users: [] };
	}

	componentDidMount() {
		axios.get('http://jsonplaceholder.typicode.com/users')
		.then((response) => {
			this.setState({ users: response.data });
		});
	}

	renderProfiles(){
		return this.state.users.map((user) => {
			return (
				<Profile
					key = {user.id}
					user = {user}
				/>
			);
		});
	}

	render(){
		return (
			<div>
				<h3>Employee Directory</h3>
				{this.renderProfiles()}
			</div>
		);
	}
}
