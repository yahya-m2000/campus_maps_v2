import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeComponents from '../../components/home';
import NavBar from '../../components/ui/NavBar';
import {TColors} from '../../theme/color';
import useStyles from '../../hooks/useStyles';

const HomeScreen = () => {
  const {colors, styles} = useStyles(createStyles);
  const insets = useSafeAreaInsets();
  return (
    // <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
    <View style={styles.container}>
      <ScrollView
        style={{
          // Paddings to handle safe area
          paddingTop: insets.top * 1.5,
        }}>
        <HomeComponents />
      </ScrollView>
    </View>
  );
};

const createStyles = (colors: TColors) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: colors.primary,
    },
  });
};
export default HomeScreen;
