import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

useStrict(true);

class UserStore {
	//Observable values can be watched by Observers
	@observable users = [];
	@observable selectedUser = {};
	@computed get selectedId() { return this.selectedUser.id; }
	@action getUsers() {
		//Managing Async tasks like ajax calls with Mobx actions
		axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
			this.setUsers(response.data);
		});
	}
	//In strict mode, only actions can modify mobx state
	@action setUsers = (users) => {
		this.users = [...users];
	}
	@action selectUser = (user) => {
		this.selectedUser = user;
	}
	@action clearSelectedUser = () => {
		this.selectedUser = {};
	}
}

const store = new UserStore();

export default store;
export { UserStore };
