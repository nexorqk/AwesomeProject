import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import eventSlice from '../features/event/eventSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
