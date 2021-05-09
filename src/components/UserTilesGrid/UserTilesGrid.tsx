import React from 'react';

import {
  Grid,
} from './style';

import UserTile, { UserTileProps } from '../UserTile/UserTile';

interface UserTilesGridProps {
  users: UserTileProps[]
}

const UserTilesGrid = ({
  users,
}: UserTilesGridProps): JSX.Element => {
  if (!users.length) {
    return (<></>);
  }
  return (
    <Grid>
      {users.map((user: UserTileProps, index: number) => (
        <UserTile {...user} key={`${user.firstName}${index}`} />
      ))}
    </Grid>
  );
};

export default UserTilesGrid;
