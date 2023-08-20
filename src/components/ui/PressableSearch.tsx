import React from 'react';
import {Button as ThemedButton} from '@rneui/themed';
import {NativeSyntheticEvent, StyleSheet} from 'react-native';
import {IconNode} from '@rneui/base';
import {Style} from '../../theme/Style';
import useStyles from '../../hooks/useStyles';
import {TColors} from '../../theme/color';

type ButtonProps = {
  title: string;
  onPress: (() => void) | undefined;
  leftIcon?: IconNode;
  disabled?: boolean;
};

const PressableSearch = ({title, onPress, leftIcon, disabled}: ButtonProps) => {
  const {styles} = useStyles(createStyles);

  return (
    <ThemedButton
      title={title}
      containerStyle={styles.container}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      onPress={onPress}
      disabled={disabled}
      icon={leftIcon}
    />
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      margin: 0,
      paddingHorizontal: 0,
    },
    buttonStyle: {
      height: Style.RATIO_Y * 50,
      borderRadius: Style.BORDER_RADIUS_SMALL,
      backgroundColor: colors.secondary,
      paddingHorizontal: 15,
    },
    titleStyle: {
      fontSize: Style.FONT_SIZE,
      color: colors.text, // You might need to adjust the color
    },
  });
};

export default PressableSearch;
