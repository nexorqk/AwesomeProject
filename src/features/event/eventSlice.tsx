import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// interface EventData {}

const initialState = {
  loading: false,
  events: [], //as EventData[]
  error: '',
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  return axios
    .get('https://api.github.com/events?per_page=25')
    .then((response: any) => response.data);
});

const eventSlice = createSlice({
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

export default eventSlice.reducer;
