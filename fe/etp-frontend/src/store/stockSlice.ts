import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createOrderThunk } from "./thunks";

interface StockState {
  value: {
    broker: string;
    symbol: string;
    quantity: number;
    side: number;
    price: number;
    limitPrice: number;
    name: string;
    stockSearch: string;
  };
  orderStatus?: string;
  error?: string | null;
}

const initialState: StockState = {
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
};


export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number>) => {
      state.value.quantity = Number(action.payload);
    },
    setSide: (state, action: PayloadAction<number>) => {
      state.value.side = Number(action.payload);
    },
    setLimitPrice: (state, action: PayloadAction<number>) => {
      state.value.limitPrice = Number(action.payload);
    },
    setStockSearch: (state, action: PayloadAction<string>) => {
      state.value.stockSearch = action.payload;
    },
    setSymbol: (state, action) => {
      state.value.symbol = action.payload;
    },
    resetState: (state) => {
      document.querySelector<HTMLInputElement>("#search")!.value = "";
      document.querySelector<HTMLInputElement>("#quantity")!.value = "";
      document.querySelector<HTMLInputElement>("#limit-price")!.value = "";
      state.value.symbol = "";
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
      .addCase(createOrderThunk.fulfilled, (state, action: PayloadAction<{ quantity: number; price: number; side: number }>) => {
        state.value.quantity = action.payload.quantity;
        state.value.price = action.payload.price;
        state.value.side = action.payload.side;
      })
      .addCase(createOrderThunk.rejected, (state, action: PayloadAction<string>) => {
        state.orderStatus = "failed";
        state.error = action.payload;
      })
  },
});

export const {
  setQuantity,
  setSide,
  setLimitPrice,
  setStockSearch,
  resetState,
  setSymbol,
} = stockSlice.actions;
export default stockSlice.reducer;
