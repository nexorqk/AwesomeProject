import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from '../../constants';
import {EventDetailsScreen, EventListScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export const EventScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.EVENTS} component={EventListScreen} />
      <Stack.Screen
        name={ROUTES.EVENT_DETAILS}
        component={EventDetailsScreen}
      />
    </Stack.Navigator>
  );
};
