import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Style} from '../../theme/Style';
import Colors from '../../theme/color';
import {TColors} from '../../theme/color';
import useStyles from '../../hooks/useStyles';
interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  colors: TColors;
}

const Card: React.FC<CardProps> = ({title, subtitle, imageUrl}) => {
  const {styles} = useStyles(createStyles);
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      borderRadius: Style.BORDER_RADIUS,
      flexDirection: 'column',
      height: Style.CARD_HEIGHT,
      width: Style.CARD_WIDTH,
      backgroundColor: colors.secondary,
      overflow: 'hidden',
    },
    image: {
      flex: 2,
    },
    text_container: {
      flex: 1,
      margin: Style.MARGIN_LESS0,
    },
    title: {},
    subtitle: {},
  });
};

export default Card;
