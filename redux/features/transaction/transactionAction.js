import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://shinzou-api.up.railway.app/api/v1";

export const getTransactions = createAsyncThunk("getTransactions", 
  async () => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.get(`${url}/transaction`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return error.response.data
    }
  }
);

export const checkout = createAsyncThunk("transaction", 
  async ({ 
    departure_flight_id,
    return_flight_id,
    passengers,
    ammount
  }, { rejectWithValue }) => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.post(`${url}/transaction`, {
        departure_flight_id,
        return_flight_id,
        passengers,
        ammount
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const payment = createAsyncThunk("payment", 
  async ({ booking_code, payment_method }, { rejectWithValue }) => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.put(`${url}/transaction/${booking_code}`, {
        payment_method
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);