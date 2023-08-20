import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/EvilIcons';
import PressableSearch from '../ui/PressableSearch'; // Import the PressableSearch component
import Input from '../ui/Input';
import {Style} from '../../theme/Style';
import {TColors} from '../../theme/color';
import useStyles from '../../hooks/useStyles';
useStyles;

const Search = () => {
  const [input, setInput] = useState('');
  const {styles} = useStyles(createStyles);
  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    // Navigate to 'Search' screen
    navigation.navigate('Search');
    console.log('success');
  };

  return (
    <View style={styles.container}>
      {route.name === 'Home' ? ( // Check if it's the home screen
        <PressableSearch
          title="Look around my friend"
          onPress={onPress}
          leftIcon={<Icon name="search" size={Style.ICON_SIZE} color="black" />}
        />
      ) : (
        <Input
          value={input}
          onChange={({nativeEvent}) => setInput(nativeEvent.text)}
          leftIcon={<Icon name="search" size={Style.ICON_SIZE} color="black" />}
        />
      )}
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};

export default Search;
