const { createSlice } = require("@reduxjs/toolkit");
import moment from "moment";
import { flights } from "@/constants/flights";

const initialState = {
  flights: [],
  searchFlight: {
    location_from: "Banda Aceh",
    location_to: "Medan",
    departure_date: moment(new Date()).format("YYYY-MM-DD"),
    return_date: moment(new Date()).format("YYYY-MM-DD"),
    passengers: {
      adult: 1,
      child: 0,
      baby: 0
    },
    class: "Economy"
  },
  loading: false,
  success: false,
  error: null
}

const flighhtSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchFlight: (state, action) => {
      state.searchFlight = action.payload
      return state;
    },
    getFlights: (state) => {
      state.flights = flights;
      return state;
    },
  },
});

export const { setSearchFlight, getFlights } = flighhtSlice.actions;
export default flighhtSlice.reducer;