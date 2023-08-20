import React from 'react';
// import {StyleSheet} from 'react-native';
import {SearchBar} from '@rneui/base';

type SearchInputProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  updateSearch: ((input: string) => void) | undefined;
};

const SearchInput = ({
  placeholder = 'Search',
  label,
  value,
  updateSearch,
  disabled,
}: SearchInputProps) => {
  return (
    <SearchBar
      label={label}
      // labelStyle={styles.label}
      // inputContainerStyle={styles.inputContainerStyle}
      // inputStyle={styles.inputStyle}
      // containerStyle={styles.container}
      // style={styles.component}
      onChangeText={updateSearch}
      value={value}
      // searchIcon={SearchSVG as IconNode}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
