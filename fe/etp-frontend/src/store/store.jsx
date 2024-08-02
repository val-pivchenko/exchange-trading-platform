import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slice";
//import reducer from slice later

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export default store;
