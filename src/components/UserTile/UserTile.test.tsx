import React from 'react';
import Modal from 'react-modal';
import { mount } from 'enzyme';
import UserTile from './UserTile';

describe('UserTile', () => {
  const wrap = mount(<UserTile
    thumbnail="https://randomuser.me/api/portraits/men/44.jpg"
    name="Tim Wright"
    userName="tinykoala227"
    email="tim.wright@example.com"
    cell="0479-199-052"
    street="Bollinger Rd 4155"
    city="Sunshine Coast"
    state="Queensland"
    postcode="1046"
    phone="05-3370-8052"
  />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('li')).toHaveLength(3);
    const texts = wrap.find('span').map((node) => node.text());
    expect(texts).toEqual(['Tim Wright', 'tinykoala227', 'tim.wright@example.com']);
  });

  it('modal is open on tile click and renders content', () => {
    expect(wrap.find(Modal).prop('isOpen')).toBe(false);
    wrap.find('div').first().simulate('click');
    expect(wrap.find(Modal).prop('isOpen')).toBe(true);

    const texts = wrap.find(Modal).find('ul').find('span').map((node) => node.text());
    expect(texts).toEqual(['Tim Wright', 'tinykoala227', 'tim.wright@example.com', 'Bollinger Rd 4155', 'Sunshine Coast', 'Queensland', '1046', '05-3370-8052', '0479-199-052']);
  });
});
