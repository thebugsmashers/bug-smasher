import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BugData from './BugData';
import type { BugObj } from './Dashboard';

type BugsState = {
  bugs: {
    [key: number]: BugObj;
  };
};

const initialState: BugsState = {
  bugs: BugData(), // getting all bugs from db
};

export const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {
    smash: (state: BugsState, id: PayloadAction<number>) => {
      // console.log('STATE: ', state.bugs[id.payload]);
      // console.log('SMASH BEFORE: ', state.bugs[id.payload].isSmashed);
      // console.log('SMASH');
      state.bugs[id.payload].isSmashed = true;
      // console.log('SMASH AFTER: ', state.bugs[id.payload].isSmashed);
    },
  },
});

export const { smash } = DashboardSlice.actions;
export const selectDashboard = (state: RootState) => state.Dashboard;
export default DashboardSlice.reducer;
