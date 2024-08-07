import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const ordersApi = createApi({
//   reducerPath: "ordersApi",
//   baseQuery: fetchBaseQuery(),
// });

// export const orderBookSlice = createSlice({
//   name: "orderBook",
//   initialState: {
//     value: {
//       symbol: "",
//       id: "",
//       price: 0,
//       side: "",
//       quantity: null,
//     },
//   },
//   reducers: {
//     // setQuantity: (state, action) => {
//     //   state.value.quantity = action.payload;
//     // },
//     // setLimitPrice: (state, action) => {
//     //   state.value.limitPrice = action.payload;
//     // },
//     // setStockSearch: (state, action) => {
//     //   state.value.stockSearch = action.payload;
//     // },
//     // resetState: (state) => {
//     //   state.value.quantity = "";
//     //   state.value.price = "";
//     //   state.value.limitPrice = "";
//     //   state.value.name = "";
//     //   state.value.stockSearch = "";
//     // },
//   },
// });

// export const {} = orderBookSlice.actions;
// export default orderBookSlice.reducer;
