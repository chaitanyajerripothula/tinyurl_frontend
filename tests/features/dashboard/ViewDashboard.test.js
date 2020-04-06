import React from 'react';
import { shallow } from 'enzyme';
import { ViewDashboard } from '../../../src/features/dashboard';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewDashboard />);
  expect(renderedComponent.find('.dashboard-view-dashboard').length).toBe(1);
});
