import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EventScreen} from '../screens/EventScreen';

const HomeScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Home!</Text>
      <EventScreen />
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
