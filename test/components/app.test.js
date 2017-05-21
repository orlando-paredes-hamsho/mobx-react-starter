import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import App from '../../src/components/app';

chai.use(chaiEnzyme());

describe('App' , () => {
	it('exists', () => {
		expect(shallow(<App />).find('div')).to.exist;
	});
});
