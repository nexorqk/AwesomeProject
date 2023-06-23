import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {COLORS, ROUTES} from '../../../constants';

export const EventItem = ({item, navigation}: any) => {
  return (
    <View style={styles.itemContainer}>
      <Button
        title={item.repo.name}
        onPress={() =>
          navigation.navigate(ROUTES.EVENT_DETAILS, {name: item.repo.name})
        }
        color={COLORS.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
  },
});
