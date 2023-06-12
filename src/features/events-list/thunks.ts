import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  return axios
    .get('https://api.github.com/events?per_page=25')
    .then((response: any) => response.data);
});
