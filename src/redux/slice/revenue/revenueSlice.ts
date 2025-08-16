import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { revenueData } from '@/data/revenueData';


export const fetchRevenue = createAsyncThunk('revenue/fetchRevenue', async () => {

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return revenueData
});

const revenueSlice = createSlice({
  name: 'revenue',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevenue.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(fetchRevenue.fulfilled, (state: any, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRevenue.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default revenueSlice.reducer;
