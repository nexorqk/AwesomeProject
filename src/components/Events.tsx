import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useGetEventsQuery} from '../redux/goodsApi';

const Events = () => {
  const {data = []} = useGetEventsQuery(Events);
  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.repo.name}</Text>}
      />
    </View>
  );
};

export default Events;
