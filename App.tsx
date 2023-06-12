import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Events from './src/components/Events';

const HomeScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Home!</Text>
      <Events />
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

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
