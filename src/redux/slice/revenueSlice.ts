import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchRevenue = createAsyncThunk('revenue/fetchRevenue', async () => {

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
    { name: 'Aug', revenue: 3490 },
    { name: 'Sep', revenue: 3490 },
    { name: 'Oct', revenue: 3490 },
    { name: 'Nov', revenue: 3490 },
    { name: 'Dec', revenue: 3490 },
  ];
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
