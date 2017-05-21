import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Profile from '../../src/components/profile';

chai.use(chaiEnzyme());

describe('Profile' , () => {
	it('exists', () => {
		expect(shallow(<Profile user={{}} />).find('li')).to.exist;
	});
});
