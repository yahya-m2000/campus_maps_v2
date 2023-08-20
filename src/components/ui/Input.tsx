import React from 'react';

import {Input as ThemedInput} from '@rneui/themed';

import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from 'react-native';
import {IconNode} from '@rneui/base';
import {Style} from '../../theme/Style';
import useStyles from '../../hooks/useStyles';
import {TColors} from '../../theme/color';

type InputProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  leftIcon?: IconNode;
  disabled?: boolean;
  onChange:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
};

const Input = ({
  placeholder,
  label,
  value,
  onChange,
  leftIcon,
  disabled,
}: InputProps) => {
  const {styles} = useStyles(createStyles);

  return (
    <ThemedInput
      label={label}
      labelStyle={styles.label}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      containerStyle={styles.container}
      style={styles.component}
      onChange={onChange}
      value={value}
      leftIcon={leftIcon}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    component: {
      margin: 0,
      padding: 0,
    },
    container: {
      paddingHorizontal: 0,
      marginBottom: -25,
    },
    inputStyle: {
      height: Style.RATIO_Y * 50,

      fontSize: Style.FONT_SIZE,
    },
    inputContainerStyle: {
      borderRadius: Style.BORDER_RADIUS_SMALL,
      borderBottomWidth: 0,
      paddingHorizontal: 15,
      backgroundColor: colors.secondary,
    },
    label: {
      fontSize: 14,
    },
  });
};

export default Input;
