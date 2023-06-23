import React from 'react';
import {FlatList, Text} from 'react-native';

import {EventItem} from './EventItem';
import {useFetchEvents} from '../../hooks/useFetchEvents';

export const EventListScreen = ({navigation}: any) => {
  const {events, error, isLoading} = useFetchEvents(25);

  return (
    <FlatList
      refreshing={isLoading}
      // onRefresh={refreshList}
      ListHeaderComponent={<Text>{error?.message}</Text>}
      data={events}
      renderItem={({item}) => <EventItem item={item} navigation={navigation} />}
    />
  );
};
