import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { searchFlight } from "./flightAction";

const searchFlightData = {
  location_from: "Banda Aceh",
  location_to: "Medan",
  departure_date: dayjs(new Date("2023-12-04")).format("YYYY-MM-DD"),
  passengers: {
    adult: 1,
    child: 0,
    baby: 0
  },
  seat_class: "Premium Economy"
}

const initialState = {
  searchFlightData,
  flights: [],
  selectedDepartureFlight: {},
  selectedReturnFlight: {},
  loading: false,
  success: false,
  error: null
}

const flighhtSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchFlight: (state, action) => {
      state.searchFlightData = action.payload
      return state;
    },
    setSelectedDepartureFlight: (state, action) => {
      state.selectedDepartureFlight = action.payload;
      return state;
    }
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

export const { setSearchFlight, setSelectedDepartureFlight } = flighhtSlice.actions;
export default flighhtSlice.reducer;