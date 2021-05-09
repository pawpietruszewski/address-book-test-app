import UserTilesGrid from '../components/UserTilesGrid';
import { UserTilesGridProps } from '../components/UserTilesGrid/UserTilesGrid';

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
