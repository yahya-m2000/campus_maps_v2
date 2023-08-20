import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

// define structure for SearchContext. this is like an object in JS
interface SearchContextValue {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
// define search context by using SearchContextValue structure. initialise the context with an empty object
export const SearchContext = createContext<SearchContextValue>(
  {} as SearchContextValue,
);
// provider. the children: React.ReactNode is a type that represents any valid react node e.g. jsx elements, strings, numbers, fragments, etc
const SearchProvider = ({children}: {children: React.ReactNode}) => {
  const [open, setOpen] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchContext.Provider
      value={{
        open,
        setOpen,
        searchValue,
        setSearchValue,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
