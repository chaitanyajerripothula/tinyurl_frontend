import React from 'react';
import { shallow } from 'enzyme';
import { Usage } from '../../../src/features/home/Usage';

describe('home/Usage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Usage {...props} />
    );

    expect(
      renderedComponent.find('.home-usage').length
    ).toBe(1);
  });
});
