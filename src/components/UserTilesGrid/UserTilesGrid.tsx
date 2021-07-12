import React from 'react';
import UserTile, { UserTileProps } from 'src/components/UserTile/UserTile';

import {
  Grid,
} from './style';

export interface UserTilesGridProps {
  users: UserTileProps[]
}

const UserTilesGrid = ({
  users,
}: UserTilesGridProps): JSX.Element => {
  if (!users || !users.length) {
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
