import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS, ROUTES} from '../../constants';
import {EventDetailsScreen, EventListScreen} from '../../screens';
import {SafeAreaView, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

export const EventScreenNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
        }}>
        <Stack.Screen name={ROUTES.EVENTS} component={EventListScreen} />
        <Stack.Screen
          name={ROUTES.EVENT_DETAILS}
          component={EventDetailsScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});
