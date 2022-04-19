import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BugData from './BugData';
export interface BugsState {
  bugs: number;
}

const initialState: BugsState = {
  bugs: JSON.parse(BugData), // getting all bugs from db
};

export const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {
    smash: (state: BugsState, id) => {
      console.log('STATE: ', state.bugs[id]);
      console.log('SMASH BEFORE: ', state.bugs[id].isSmashed);
      console.log('SMASH');
      state.bugs[id].isSmashed = true;
      console.log('SMASH AFTER: ', state.bugs[id].isSmashed);
    },
  },
});

export const selectDashboard = (state: RootState) => state.Dashboard;

export const { smash } = DashboardSlice.actions;
export default DashboardSlice.reducer;
