const { createSlice } = require("@reduxjs/toolkit");
import { flights } from "@/constants/flights";

const initialState = {
  flight: {},
  loading: false,
  success: false,
  error: null
}

const flighhtSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    getData: (state) => {
      state.flight = flights;
      return state;
    },
  },
});

export const { getData } = flighhtSlice.actions;

export default flighhtSlice.reducer;