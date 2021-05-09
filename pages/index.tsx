import React from 'react';
import UserTilesGrid from '../src/components/UserTilesGrid';
import UserTilesGridData from '../src/components/UserTilesGrid/__fixtures__';

export default function Home(): JSX.Element {
  return (
    <div>
      <UserTilesGrid
        users={UserTilesGridData.users}
      />
    </div>
  );
}
