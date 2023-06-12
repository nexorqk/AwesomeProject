import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/storeHooks';
import {fetchEvents} from '../../features/events-list';

export const EventScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const events = useAppSelector(state => state.events);

  return (
    <FlatList
      refreshing={events.loading}
      ListHeaderComponent={<Text>{events.error}</Text>}
      data={events.events}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text>{item.repo.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
  },
});
