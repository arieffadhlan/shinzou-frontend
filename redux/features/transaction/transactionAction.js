import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8000/api/v1";

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
        return_flight_id: return_flight_id ?? null,
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