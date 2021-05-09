import React from 'react';

import {
  Grid,
} from './style';

import UserTile, { UserTileProps } from '../UserTile/UserTile';

export interface UserTilesGridProps {
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
      {users.map((user: UserTileProps) => (
        <UserTile {...user} key={user.id} />
      ))}
    </Grid>
  );
};

export default UserTilesGrid;
