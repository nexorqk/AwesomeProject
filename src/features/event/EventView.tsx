import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchEvents} from './eventSlice';

export const EventView = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const events = useAppSelector(state => state.events);

  return (
    <View>
      <Text>List of Events</Text>
      {events.loading && <Text>Loading...</Text>}
      {!events.loading && events.error ? (
        <Text>Error: {events.error}</Text>
      ) : null}
      {!events.loading && events.events.length ? (
        <FlatList
          data={events.events}
          renderItem={({item}) => <Text>{item.repo.name}</Text>}
        />
      ) : null}
    </View>
  );
};
