import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES} from '../../constants';
import {SettingsScreen} from '../../screens';
import {EventScreenNavigation} from '../EventsScreenNavigation';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ROUTES.HOME} component={EventScreenNavigation} />
        <Tab.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
