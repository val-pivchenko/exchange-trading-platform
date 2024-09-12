import { createAsyncThunk } from "@reduxjs/toolkit";
import exchangeService from "../clients/exchangeService";
import { setMarketDepth } from "./marketDepthSlice";
import { setSymbols, setLastPrice } from "./symbolsSlice";
import { setOrderBook } from "./orderBookSlice";
import { OrderStatus } from "../clients/exchange";

export const createOrderThunk = createAsyncThunk(
  "order/createOrder",
  async (request, { rejectWithValue }) => {
    try {
      const { response } = await exchangeService.createOrder(request);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getSymbolsThunk = createAsyncThunk(
  "symbol/getSymbols",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { response } = await exchangeService.getSymbols(_);
      console.log("GETTING SYMBOLS");
      console.log(response.symbols);

      dispatch(setSymbols(response.symbols));

      return response.symbols;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "order/getOpenOrders",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const request = {
        broker: "",
        symbol: "",
        status: OrderStatus.OPEN,
      };

      const { response } = await exchangeService.getOrders(request);
      console.log("OPEN ORDERS");
      console.log(response);

      // Dispatch the setMarketDepth action
      dispatch(setMarketDepth(response.orders));

      return response.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllOrdersThunk = createAsyncThunk(
  "order/getAllOrders",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const request = {
        status: OrderStatus.UNSET_ORDER_STATUS,
      };

      const { response } = await exchangeService.getOrders(request);
      console.log("ALL ORDERS");
      console.log(response.orders);

      // Dispatch the setOrderBook action
      dispatch(setOrderBook(response.orders));

      return response.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getLastPrice = createAsyncThunk(
  "order/getLastPrice",
  async (request, { dispatch, rejectWithValue }) => {
    try {
      const { response } = await exchangeService.getLastPrice(request);
      console.log("LAST PRICE");
      console.log(response);

      // Dispatch the setOrderBook action
      dispatch(setLastPrice(response));

      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createOrderAndRefreshThunk = createAsyncThunk(
  "order/createOrderAndRefresh",
  async (request, { dispatch, rejectWithValue }) => {
    try {
      // Create the order
      const createResponse = await dispatch(createOrderThunk(request)).unwrap();

      // Refresh the orders list after order creation
      await dispatch(getOrdersThunk());
      await dispatch(getAllOrdersThunk());

      return createResponse;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
