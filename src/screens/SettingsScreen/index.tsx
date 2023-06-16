import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SettingsScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Settings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
