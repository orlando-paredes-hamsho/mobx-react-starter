import { expect } from 'chai';
import model from '../../src/models/model';

describe('Model' , () => {
	it('has something', () => {
		expect(model.something).to.not.be.undefined;
	});
});
