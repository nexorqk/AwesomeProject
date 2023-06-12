import {createSlice} from '@reduxjs/toolkit';
import {fetchEvents} from './thunks';
import {EventData} from './types';

interface IState {
  loading: boolean;
  events: EventData[];
  error: string;
}

const initialState: IState = {
  loading: false,
  events: [],
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
