import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    value: {
      quantity: null,
      side: "",
      price: 0,
      limitPrice: null,
      name: "",
      stockSearch: "",
    },
  },
  reducers: {
    setQuantity: (state, action) => {
      state.value.quantity = action.payload;
    },
    setLimitPrice: (state, action) => {
      state.value.limitPrice = action.payload;
    },
    setStockSearch: (state, action) => {
      state.value.stockSearch = action.payload;
    },
    resetState: (state) => {
      state.value.quantity = "";
      state.value.price = "";
      state.value.limitPrice = "";
      state.value.name = "";
      state.value.stockSearch = "";
    },
  },
});

export const { setQuantity, setLimitPrice, setStockSearch, resetState } =
  stockSlice.actions;
export default stockSlice.reducer;
