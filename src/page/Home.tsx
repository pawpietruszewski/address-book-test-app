import React, { useState, useEffect, useRef } from 'react';
import UserTilesGrid from '../components/UserTilesGrid';
import Loader from '../components/Loader';
import { fetchUsers } from '../utility/randomuser';
import Search from '../components/Search';
import FilterContext from '../contexts/filterContext';

export default function Home(): JSX.Element {
  const [userList, setUserList] = useState([]);
  const [displayedUserList, setDisplayedUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [endPages, setEndPages] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [filterState, setFilterState] = useState({ filter: '' });
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
