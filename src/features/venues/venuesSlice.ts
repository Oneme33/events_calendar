import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface VenuesState {
  [key: string]: string;
}

const initialState: VenuesState = {};

export const venuesSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    addVenue: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { id, name } = action.payload;
      state[id] = name;
    },
  },
});

export const { addVenue } = venuesSlice.actions;
export const selectVenues = (state: RootState) => state.venues;
export default venuesSlice.reducer;
