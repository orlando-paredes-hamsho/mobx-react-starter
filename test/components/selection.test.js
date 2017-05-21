import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Selection from '../../src/components/selection';

chai.use(chaiEnzyme());

describe('Selection' , () => {
	it('exists', () => {
		expect(shallow(<Selection user={{}} />).find('ul')).to.exist;
	});
});
