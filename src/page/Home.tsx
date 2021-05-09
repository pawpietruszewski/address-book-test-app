import { useState, useEffect, useRef } from 'react';
import UserTilesGrid from '../components/UserTilesGrid';
import Loader from '../components/Loader';
import { UserTilesGridProps } from '../components/UserTilesGrid/UserTilesGrid';
import { fetchUsers } from '../utility/randomuser';

export default function Home({
  users,
}: UserTilesGridProps): JSX.Element {
  const [userList, setUserList] = useState(users);
  const [page, setPage] = useState(2);
  const [endPages, setEndPages] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const scrollY = useRef(0);
  const windowHeight = useRef(0);
  const documentHeight = useRef(0);

  const loadUserList = () => {
    fetchUsers(page)
      .then((data) => {
        const newList = userList.concat(data);
        setUserList(newList);
        setPage(page + 1);
        if (!data.length) {
          setEndPages(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setShowLoader(false);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  const onScroll = () => {
    if (showLoader || endPages || window.scrollY === scrollY.current) {
      return;
    }

    if (window.scrollY + windowHeight.current > documentHeight.current - windowHeight.current) {
      setShowLoader(true);
      loadUserList();
    }
  };

  const onResize = () => {
    windowHeight.current = window.innerHeight;
    documentHeight.current = document.documentElement.offsetHeight;
  };

  useEffect(() => {
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [onScroll]);

  return (
    <div>
      <UserTilesGrid
        users={userList}
      />
      <Loader end={endPages} show={showLoader} />
    </div>
  );
}
