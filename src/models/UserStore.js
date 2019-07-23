// src/models/UserStore.js
import {
	observable,
	action,
	computed,
	decorate
} from 'mobx';
import axios from 'axios';

class UserStore {
	// Values marked as 'observable' can be watched by 'observers'
	users = [];
	selectedUser = {};
	get selectedId() {
		return this.selectedUser.id;
	}
	// In strict mode, only actions can modify mobx state
	setUsers = (users) => {
		this.users = [...users];
	}
	selectUser = (user) => {
		this.selectedUser = user;
	}
	// Managing how we clear our observable state
	clearSelectedUser = () => {
		this.selectedUser = {};
	}
	// An example that's a little more complex
	getUsers() {
		//Managing Async tasks like ajax calls with Mobx actions
		axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
			this.setUsers(response.data);
		});
	}
}

decorate(UserStore, {
	users: observable,
	selectedUser: observable,
	selectedId: computed,
	setUsers: action,
	selectUser: action,
	clearSelectedUser: action,
	getUsers: action
});

const store = new UserStore();

export default store;
export {
	UserStore
};
