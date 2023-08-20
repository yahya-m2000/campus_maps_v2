import {View, Text} from 'react-native';
import React from 'react';
import SearchPanel from './search';
import Favourites from './favourites';
import Events from './events';

const HomeComponents = () => {
  return (
    <View>
      <SearchPanel />
      <Favourites />
      <Events />
    </View>
  );
};

export default HomeComponents;
