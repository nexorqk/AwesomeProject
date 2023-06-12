import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
  endpoints: build => ({
    getEvents: build.query({
      query: () => 'events',
    }),
  }),
});

export const {useGetEventsQuery} = eventsApi;
