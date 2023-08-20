import {useContext} from 'react';
import {SearchContext} from '../context/SearchContext';

const useSearch = () => {
  const searchContext = useContext(SearchContext);

  const open = searchContext.open;
  const setOpen = searchContext.setOpen;

  const searchValue = searchContext.searchValue;
  const setSearchValue = searchContext.setSearchValue;
  return {open, setOpen, searchValue, setSearchValue};
};

export default useSearch;
