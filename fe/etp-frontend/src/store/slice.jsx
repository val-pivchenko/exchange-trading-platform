import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    value: {
      quantity: 0,
      price: 0,
      name: "",
      stockSearch: "",
    },
  },
  reducers: {
    setQuantity: (state, action) => {
      state.value.quantity = action.payload;
    },
    setStockSearch: (state, action) => {
      state.value.stockSearch = action.payload;
    },
    resetState: (state) => {
      state.value.quantity = 22;
      state.value.price = 12;
      state.value.name = "Amazon";
      state.value.stockSearch = "";
    },
  },
});

export const { setQuantity, setStockSearch, resetState } = stockSlice.actions;
export default stockSlice.reducer;
