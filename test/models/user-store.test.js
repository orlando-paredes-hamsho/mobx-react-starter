import { expect } from 'chai';
import store from '../../src/models/user-store';

describe('Model' , () => {
	it('has an empty array of users', () => {
		expect(store.users).to.be.empty;
	});
	it('has an empty selected user', () => {
		expect(store.selectedUser).to.be.empty;
	});
});
