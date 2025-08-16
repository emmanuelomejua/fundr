import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { transactionData } from '@/data/transactionData';

export const getTransactions = createAsyncThunk('tranactions/getTransactions', async () => {

  await new Promise((resolve) => setTimeout(resolve, 500));

  return transactionData
});


const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getTransactions.fulfilled, (state: any, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getTransactions.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default transactionSlice.reducer;

