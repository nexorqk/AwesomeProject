import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {eventSlice} from '../features/events-list';

const middleware: any[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
