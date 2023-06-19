import React from 'react';
import {FlatList, Text} from 'react-native';

import {EventItem} from './EventItem';

export const EventListScreen = ({navigation}) => {
  return (
    <FlatList
      refreshing={events.loading}
      onRefresh={refreshList}
      ListHeaderComponent={<Text>{events.error}</Text>}
      data={events.events}
      renderItem={({item}) => <EventItem item={item} navigation={navigation} />}
    />
  );
};
