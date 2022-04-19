import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BugData from './BugData';
type BugsState = {
  bugs: object;
};
const initialState: BugsState = {
  bugs: BugData(), // getting all bugs from db
};

export const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {
    smash: (state: BugsState, id: PayloadAction<number>) => {
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
