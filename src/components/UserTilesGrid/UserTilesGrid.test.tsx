import React from 'react';
import { mount } from 'enzyme';
import UserTilesGrid from './UserTilesGrid';
import UserTilesGridData from './__fixtures__';

describe('UserTileGrid', () => {
  const wrap = mount(<UserTilesGrid
    users={UserTilesGridData.users}
  />);

  it('should render right number of tiles without throwing an error', () => {
    expect(wrap);
    expect(wrap.find('UserTile')).toHaveLength(8);
  });
});
