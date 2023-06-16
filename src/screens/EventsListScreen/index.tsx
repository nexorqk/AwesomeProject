import React, {useCallback, useEffect} from 'react';
import {FlatList, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/storeHooks';
import {fetchEvents} from '../../features/events-list';
import {EventItem} from './EventItem';

export const EventListScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.events);
  const refreshList = useCallback(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

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
