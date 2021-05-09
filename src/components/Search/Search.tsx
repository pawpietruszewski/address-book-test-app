import React, { useRef, useContext, useState } from 'react';
import FilterContext from '../../contexts/filterContext';
import {
  Wrapper,
  Button,
  Input,
} from './style';

const Search = (): JSX.Element => {
  const { setFilterState } = useContext(FilterContext);
  const [searchValue, setSearchValue] = useState('');
  const searchInput = useRef<HTMLInputElement>();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterState({
      filter: searchInput.current.value,
    });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          Search:
          <Input id="search" type="text" ref={searchInput} value={searchValue} onChange={handleChange} />
        </label>
        <Button type="submit"><span>Submit</span></Button>
      </form>
    </Wrapper>
  );
};

export default Search;
