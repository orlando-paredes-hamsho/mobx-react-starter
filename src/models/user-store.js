import mobx, { observable, action } from 'mobx';
import axios from 'axios';

mobx.useStrict(true);

class UserStore {
	//Observable values can be watched by Observers
	@observable users = [];
	@observable selectedUser = {};
	@action getUsers() {
		//Managing Async tasks like ajax calls with Mobx actions
		axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
			this.setUsers(response.data);
		});
	}
	//In strict mode, only actions can modify mobx state
	@action setUsers(users) {
		this.users = [...users];
	}
	@action selectUser(user) {
		this.selectedUser = user;
	}
}

const store = new UserStore();

export default store;
export { UserStore };
