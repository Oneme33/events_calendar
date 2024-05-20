import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '@/features/events/eventsSlice';
import venuesReducer from '@/features/venues/venuesSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    venues: venuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
