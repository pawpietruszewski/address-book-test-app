import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  const wrap = shallow(<Search />);

  it('should render without throwing an error', () => {
    expect(wrap);
  });
});
