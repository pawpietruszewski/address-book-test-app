import React from 'react';
import { GetStaticProps } from 'next';
import UserTilesGrid from '../src/components/UserTilesGrid';
import { fetchUsers } from '../src/utility/randomuser';

import { UserTilesGridProps } from '../src/components/UserTilesGrid/UserTilesGrid';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const users = await fetchUsers(1);
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    return {
      notFound: true,
    };
  }
};

export default function Home({
  users,
}: UserTilesGridProps): JSX.Element {
  return (
    <div>
      <UserTilesGrid
        users={users}
      />
    </div>
  );
}
