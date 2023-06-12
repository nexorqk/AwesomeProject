import {createSlice} from '@reduxjs/toolkit';
import {fetchEvents} from './thunks';

// interface EventData {}

const initialState = {
  loading: false,
  events: [], //as EventData[]
  error: '',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEvents.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.error = '';
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.events = [];
      state.error = action.error.message || '';
    });
  },
});
