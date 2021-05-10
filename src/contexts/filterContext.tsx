import React, { Dispatch, SetStateAction } from 'react';

export type FilterState = { filter: string };

type FilterContextValue = {
  filterState: FilterState;
  setFilterState: Dispatch<SetStateAction<FilterState>>;
};

const filterCtxDefaultValue: FilterContextValue = {
  filterState: { filter: '' },
  setFilterState: () => {},
};

const LanguageContext = React.createContext(filterCtxDefaultValue);

export default LanguageContext;
