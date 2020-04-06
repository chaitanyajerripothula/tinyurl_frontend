import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../../../src/features/dashboard';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Chart />);
  expect(renderedComponent.find('.dashboard-chart').length).toBe(1);
});
