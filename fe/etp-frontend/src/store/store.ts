import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stockSlice";
import marketDepthReducer from "./marketDepthSlice";
import orderBookReducer from "./orderBookSlice";
import symbolsReducer from "./symbolsSlice";

//import reducer from slice later

const store = configureStore({
  reducer: {
    stock: stockReducer,
    marketDepth: marketDepthReducer,
    orderBook: orderBookReducer,
    symbols: symbolsReducer,
  },
});

export default store;
