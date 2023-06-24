'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    "../../constants/test.json"
  );
  return response.data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    filterByLocation: (state, action) => {
      state.value = state.value.filter(
        (item) => item.location === action.payload
      );
    },
    filterByDateAndTime: (state, action) => {
      state.value = state.value.filter(
        (item) => item.date >= action.payload
      );
    },
    filterByCapacity: (state, action) => {
      state.value = state.value.filter(
        (item) => item.capacity >= action.payload
      );
    },
    filterBySeatClass: (state, action) => {
      state.value = state.value.filter(
        (item) => item.seatclass >= action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const { filterByLocation, filterByDateAndTime, filterByCapacity, filterBySeatClass } =
  dataSlice.actions;

export const selectData = (state) => state.data.value;

export default dataSlice.reducer;
