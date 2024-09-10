import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stockSlice";
import marketDepthReducer from "./marketDepthSlice";
import orderBookReducer from "./orderBookSlice";

//import reducer from slice later

const store = configureStore({
  reducer: {
    stock: stockReducer,
    marketDepth: marketDepthReducer,
    orderBook: orderBookReducer,
  },
});

export default store;
