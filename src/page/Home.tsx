import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import UserTilesGrid from '../components/UserTilesGrid';
import Loader from '../components/Loader';
import fetchUsers from '../utility/randomuser';
import Search from '../components/Search';
import FilterContext from '../contexts/filterContext';
import { SettingsContext } from '../contexts/settingsContext';
import { RESULTS_LIMIT } from '../constant/config';

export default function Home(): JSX.Element {
  const { settings } = useContext(SettingsContext);
  const [userList, setUserList] = useState([]);
  const [displayedUserList, setDisplayedUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [endPages, setEndPages] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [filterState, setFilterState] = useState({ filter: '' });
  const scrollY = useRef(0);
  const windowHeight = useRef(0);
  const documentHeight = useRef(0);
  const fetchedUsersAmount = useRef(0);

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
