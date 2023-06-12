import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../store/storeHooks';
import {fetchEvents} from '../../features/events-list/slice';

export const EventScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const events: any = useAppSelector(state => state.events);

  return (
    <FlatList
      refreshing={events.loading}
      ListHeaderComponent={<Text>{events.error}</Text>}
      data={events.events}
      renderItem={({item}) => <Text>{item.repo.name}</Text>}
    />
  );
};
