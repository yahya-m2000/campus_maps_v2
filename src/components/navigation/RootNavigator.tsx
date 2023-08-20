import React, {useEffect} from 'react';

import 'react-native-gesture-handler';

import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabs} from './TabNavigator';
import useColors from '../../hooks/useColor';
import Colors from '../../theme/color';
import {SearchScreen} from '../../screens';

function RootNavigator() {
  const {colors, applyColors} = useColors();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    applyColors(colorScheme === 'dark' ? Colors.dark : Colors.light);
  }, [applyColors, colorScheme]); // Fix: Changed 'currentTheme' to 'colorScheme'

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="bottomTab" component={BottomTabs} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
