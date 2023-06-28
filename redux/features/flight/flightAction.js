import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const url = "http://localhost:8000/api/v1";

export const searchFlight = createAsyncThunk("search-flight", 
  async ({ 
    location_from, 
    location_to, 
    departure_date, 
    passengers, 
    seat_class 
  }, { rejectWithValue }) => {
    try {
      const { adult, child, baby } = passengers;
      const departureDate = dayjs(departure_date).format("YYYY-MM-DD");
      const totalPassengers = adult + child + baby;
      
      const response = await axios.get(`${url}/search-flight`,  {
        params: {
          location_from, 
          location_to, 
          departure_date: departureDate, 
          passengers: totalPassengers, 
          seat_class 
        }
      });
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);