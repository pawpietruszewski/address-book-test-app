import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import UserTilesGrid from 'src/components/UserTilesGrid';
import Loader from 'src/components/Loader';
import fetchUsers from 'src/utility/randomuser';
import Search from 'src/components/Search';
import FilterContext from 'src/contexts/filterContext';
import { SettingsContext } from 'src/contexts/settingsContext';
import { RESULTS_LIMIT } from 'src/constant/config';

export default function Home(): JSX.Element {
  const { settings } = useContext(SettingsContext);
  const [userList, setUserList] = useState([]);
  const [displayedUserList, setDisplayedUserList] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [endPages, setEndPages] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [filterState, setFilterState] = useState({ filter: '' });
  const scrollY = useRef<number>(0);
  const windowHeight = useRef<number>(0);
  const documentHeight = useRef<number>(0);
  const fetchedUsersAmount = useRef<number>(0);

  const loadUserList = () => {
    fetchUsers({
      page,
      nat: settings && settings.nat,
    })
      .then((data) => {
        fetchedUsersAmount.current += data.length;
        const newList = userList.concat(data);
        setUserList(newList);
        setPage(page + 1);

        if (!data.length || fetchedUsersAmount.current >= RESULTS_LIMIT) {
          setEndPages(true);
          setShowLoader(true);
          return;
        }
        setShowLoader(false);
      })
      .catch((err) => {
        console.error(err);
        setShowLoader(false);
      });
  };

  const onScroll = () => {
    if (showLoader || endPages || window.scrollY === scrollY.current || endPages) {
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

  useEffect(() => {
    const filteredUserList = filterState.filter
      ? userList.filter((user) => user.name.indexOf(filterState.filter) > -1) : userList;
    setDisplayedUserList(filteredUserList);
  }, [filterState, userList]);

  useEffect(() => {
    setShowLoader(true);
    loadUserList();
  }, []);

  return (
    <div>
      <FilterContext.Provider value={{ filterState, setFilterState }}>
        <Search />
      </FilterContext.Provider>
      <UserTilesGrid
        users={displayedUserList}
      />
      <Loader end={endPages} show={showLoader} />
    </div>
  );
}
