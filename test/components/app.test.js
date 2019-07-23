import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('App' , () => {
	it('exists', () => {
		expect(shallow(<App />).find('div')).to.exist;
	});
});
