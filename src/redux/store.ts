import { configureStore } from '@reduxjs/toolkit';
import revenueReducer from './slice/revenue/revenueSlice';
import transactionReducer from './slice/transaction/transactionSlice'

export const store = configureStore({
  reducer: {
    revenue: revenueReducer,
    transactions: transactionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
