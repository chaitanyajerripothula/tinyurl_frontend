import React from 'react';
import { shallow } from 'enzyme';
import { Pricing } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Pricing />);
  expect(renderedComponent.find('.home-pricing').length).toBe(1);
});
