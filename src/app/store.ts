import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import DashboardReducer from '../features/dashboard/DashboardSlice';

export const store = configureStore({
  reducer: {
    Dashboard: DashboardReducer,
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
