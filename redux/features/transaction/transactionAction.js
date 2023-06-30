import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8000/api/v1";

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
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response)
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);