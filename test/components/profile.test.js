import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Profile from '../../src/components/Profile';

describe('Profile' , () => {
	it('exists', () => {
		expect(shallow(<Profile user={{}} />).find('li')).to.exist;
	});
});
