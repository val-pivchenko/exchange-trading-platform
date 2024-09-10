import { createSlice } from "@reduxjs/toolkit";
import { getAllOrdersThunk } from "./thunks";

export const orderBookSlice = createSlice({
  name: "orderBook",
  initialState: {
    orders: [],
    status: "idle", // Added to track status of fetch
    error: null, // Added to track errors
  },
  reducers: {
    setOrderBook: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrdersThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllOrdersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(getAllOrdersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setOrderBook } = orderBookSlice.actions;
export default orderBookSlice.reducer;
