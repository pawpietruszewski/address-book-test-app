import React from 'react';
import { mount } from 'enzyme';
import NatSelector from './NatSelector';

describe('NatSelector', () => {
  const wrap = mount(<NatSelector />);

  it('renders header correctly', () => {
    expect(wrap);
    expect(wrap.find('h2').text()).toEqual('Please select the option:');
  });

  it('renders select correctly', () => {
    const selectValues = wrap.find('option').map((node) => node.props().value);
    expect(selectValues).toEqual(['', 'CH', 'ES', 'FR', 'GB']);
  });
});
