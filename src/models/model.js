import { observable } from 'mobx';

class modelStore {
	@observable something;

	constructor() {
		this.something = null;
	}

}

const model = new modelStore();

export default model;
export { modelStore };
