import { createSlice } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./thunks";
import { Side } from "../clients/exchange";

export const marketDepthSlice = createSlice({
  name: "marketDepth",
  initialState: {
    orders: [],
    buyData: [],
    sellData: [],
    buyRatio: 0,
    sellRatio: 0,
    status: "idle", // Added to track status of fetch
    error: null, // Added to track errors
  },
  reducers: {
    setMarketDepth: (state, action) => {
      state.orders = action.payload;
    },
    filterOrders: (state) => {
      state.buyData = state.orders
        .filter((record) => record.side === Side.BUY)
        .sort((x, y) => y.price - x.price);

      state.sellData = state.orders
        .filter((record) => record.side === Side.SELL)
        .sort((x, y) => x.price - y.price);

      const totalOrders = state.buyData.length + state.sellData.length;

      if (totalOrders > 0) {
        state.buyRatio = Math.round((state.buyData.length * 100) / totalOrders);
        state.sellRatio = 100 - state.buyRatio;
      } else {
        state.buyRatio = 0;
        state.sellRatio = 0;
      }
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
        marketDepthSlice.caseReducers.filterOrders(state);
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setMarketDepth, filterOrders } = marketDepthSlice.actions;
export default marketDepthSlice.reducer;
