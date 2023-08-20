import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Carousel from '../../ui/Carousel';
import {Style} from '../../../theme/Style';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourites</Text>
      <View style={styles.subcontainer}>
        <Carousel />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Style.MARGIN_LESS0,
    marginTop: Style.MARGIN2,
  },
  subcontainer: {
    marginTop: Style.MARGIN_LESS0,
    marginBottom: Style.MARGIN2,
    marginHorizontal: 0 - Style.MARGIN_LESS0,
  },
  text: {
    fontSize: Style.FONT_SIZE.fontSize,
    fontWeight: Style.FONT_SIZE.fontWeight,
    marginHorizontal: Style.MARGIN_LESS6,
  },
});

export default Favourites;
