import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { TicketmasterEvent } from '@/types/interfaces';

interface EventsState {
  eventsById: { [key: string]: TicketmasterEvent };
}

const initialState: EventsState = {
  eventsById: {},
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvents: (state, action: PayloadAction<TicketmasterEvent[]>) => {
      action.payload.forEach((event) => {
        state.eventsById[event.id] = event;
      });
    },
  },
});

// Selectors
export const selectEventsById = (state: RootState) => state.events.eventsById;

export const selectSortedEvents = createSelector(
  [selectEventsById, (state: RootState, sortBy: 'date' | 'name') => sortBy],
  (eventsById, sortBy) => {
    const eventsArray = Object.values(eventsById);
    return eventsArray.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
);

export const { addEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
