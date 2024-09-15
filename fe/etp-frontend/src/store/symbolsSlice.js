import { createSlice } from "@reduxjs/toolkit";
import { getSymbolsThunk } from "./thunks";

export const symbolsSlice = createSlice({
  name: "symbols",
  initialState: {
    symbols: [],
    lastPrice: 0.0,
    status: "idle", // Added to track status of fetch
    error: null, // Added to track errors
  },
  reducers: {
    setSymbols: (state, action) => {
      state.symbols = action.payload;
    },
    setLastPrice: (state, action) => {
      state.lastPrice = action.payload;
    },
    resetLastPrice: (state) => {
      state.lastPrice = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSymbolsThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getSymbolsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.symbols = action.payload;
      })
      .addCase(getSymbolsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setSymbols, setLastPrice, resetLastPrice } =
  symbolsSlice.actions;
export default symbolsSlice.reducer;
