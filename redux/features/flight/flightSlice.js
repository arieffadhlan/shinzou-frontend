import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { searchFlight } from "./flightAction";

const searchFlightData = {
  location_from: "Banda Aceh",
  location_to: "Medan",
  departure_date: dayjs(new Date()).format("YYYY-MM-DD"),
  return_date: dayjs(new Date()).format("YYYY-MM-DD"),
  passengers: {
    adult: 1,
    child: 0,
    baby: 0
  },
  seat_class: "Economy"
}

const initialState = {
  flights: [],
  selectedDepartureFlight: {},
  selectedReturnFlight: {},
  searchFlightData,
  isReturn: false,
  loading: false,
  success: false,
  error: null
}

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    clearFlightState: (state) => {
      state.flights = [];
      state.selectedDepartureFlight = {};
      state.selectedReturnFlight = {};
      state.searchFlightData = searchFlightData;
      state.isReturn = false;
      state.loading = false;
      state.success = false;
      state.error = null;
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    setSelectedDepartureFlight: (state, action) => {
      state.selectedDepartureFlight = action.payload;
    },
    setSelectedReturnFlight: (state, action) => {
      state.selectedReturnFlight = action.payload;
    },
    setSearchFlight: (state, action) => {
      state.searchFlightData = action.payload;
    },
    setIsReturnFlight: (state, action) => {
      state.isReturn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchFlight.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchFlight.fulfilled, (state, action) => {
      state.flights = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(searchFlight.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { 
  clearFlightState, 
  setFlights,
  setSelectedDepartureFlight,
  setSelectedReturnFlight, 
  setSearchFlight, 
  setIsReturnFlight
} = flightSlice.actions;

export default flightSlice.reducer;