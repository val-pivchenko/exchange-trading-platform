import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./thunks";

export const orderBookSlice = createSlice({
  name: "orderBook",
  initialState: {
    orders: [],
    status: "idle", // Added to track status of fetch
    error: null, // Added to track errors
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setOrders } = orderBookSlice.actions;
export default orderBookSlice.reducer;
