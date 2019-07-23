import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Selection from '../../src/components/selection';

describe('Selection' , () => {
	it('exists', () => {
		expect(shallow(<Selection user={{}} />).find('ul')).to.exist;
	});
});
