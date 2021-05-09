import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const wrap = mount(<Header title="Button" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('h1').text()).toBe('Button');
  });
});
