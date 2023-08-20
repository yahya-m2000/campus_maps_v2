import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// screens
import {HomeScreen, ProfileScreen, SettingsScreen} from '../../screens';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  try {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarBackground: () => (
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="light"
              blurAmount={5}
            />
          ),
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
          },
          tabBarIcon: ({color, size}) => {
            // Define icons for each route here
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <AntDesign name="user" size={size} color={color} />;
            } else if (route.name === 'Settings') {
              return <FontAwesome5 name="cog" size={size} color={color} />;
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  } catch (error) {
    console.log(`Navigation error: ${error}`);
  }
}

export {BottomTabs};
