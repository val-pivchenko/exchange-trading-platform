import { createSlice } from "@reduxjs/toolkit";
import { createOrderThunk } from "./thunks";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    value: {
      broker: "",
      symbol: "",
      quantity: 0,
      side: 0,
      price: 0,
      limitPrice: 0,
      name: "",
      stockSearch: "",
    },
  },
  reducers: {
    setQuantity: (state, action) => {
      state.value.quantity = Number(action.payload);
    },
    setSide: (state, action) => {
      state.value.side = Number(action.payload);
    },
    setLimitPrice: (state, action) => {
      state.value.limitPrice = Number(action.payload);
    },
    setStockSearch: (state, action) => {
      state.value.stockSearch = action.payload;
    },
    resetState: (state) => {
      document.querySelector("#quantity").value = null;
      document.querySelector("#limit-price").value = null;
      state.value.price = 0;
      state.value.limitPrice = 0;
      state.value.quantity = 0;
      state.value.side = 0;
      state.value.name = "";
      state.value.stockSearch = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderThunk.pending, (state) => {
        state.orderStatus = "loading";
        state.error = null;
      })
      .addCase(createOrderThunk.fulfilled, (state, action) => {
        state.orderStatus = "succeeded";
        state.value.quantity = action.payload.quantity;
        state.value.price = action.payload.price;
        state.value.side = action.payload.side;
      })
      .addCase(createOrderThunk.rejected, (state, action) => {
        state.orderStatus = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setQuantity,
  setSide,
  setLimitPrice,
  setStockSearch,
  resetState,
} = stockSlice.actions;
export default stockSlice.reducer;
