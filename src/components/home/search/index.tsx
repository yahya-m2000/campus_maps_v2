import {View, StyleSheet, TouchableOpacity} from 'react-native';

import React from 'react';

// import useSearch from '../../../hooks/useSearch';
import Search from '../../widgets/Search';
import RecentResults from './recent_results';
import {Style} from '../../../theme/Style';
import {TColors} from '../../../theme/color';
import useStyles from '../../../hooks/useStyles';
import PressableSearch from '../../ui/PressableSearch';

const SearchPanel = () => {
  const {styles} = useStyles(createStyles);
  //   const {open, setOpen, searchValue, setSearchValue} = useSearch();
  const apiResponse = [
    {title: 'Place 1', subtitle: 'Place 1, South Kensington, SW1'},
    {title: 'Place 2', subtitle: 'Place 2, Downtown, SW2'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Search />
        <RecentResults results={apiResponse} />
      </View>
    </View>
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      borderColor: colors.secondary,
      borderBottomWidth: Style.RATIO_Y * 10,
    },
    subcontainer: {
      marginHorizontal: Style.MARGIN2,
    },
  });
};

export default SearchPanel;
