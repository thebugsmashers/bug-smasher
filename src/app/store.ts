import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import DashboardReducer from '../features/dashboard/DashboardSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    Dashboard: DashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
