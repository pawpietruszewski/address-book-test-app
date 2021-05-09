import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  const wrap = shallow(<Loader end={false} show />);

  it('renders with end = false', () => {
    expect(wrap);
    expect(wrap.text()).toBe('Loading...');
  });

  it('renders with end = true', () => {
    wrap.setProps({ end: true });
    expect(wrap.text()).toBe('End of users catalog');
  });
});
