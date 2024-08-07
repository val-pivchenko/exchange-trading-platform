import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stockSlice";
// import orderBookReducer from "./orderBookSlice";
//import reducer from slice later

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export default store;
