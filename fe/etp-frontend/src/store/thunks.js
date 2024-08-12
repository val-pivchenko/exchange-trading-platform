import { createAsyncThunk } from "@reduxjs/toolkit";
import exchangeService from "../clients/exchangeService";
import { setOrders } from "./orderBookSlice";

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

export const getOrdersThunk = createAsyncThunk(
  "order/getOrders",
  async (request, { rejectWithValue }) => {
    try {
      const { response } = await exchangeService.getOrders(request);
      console.log(response.orders);
      setOrders(response.orders);
      return response.orders;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
