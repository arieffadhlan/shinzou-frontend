import { createSlice } from "@reduxjs/toolkit";
import { checkout } from "./transactionAction";

const initialState = {
  transactions: [],
  loading: false,
  success: false,
  error: null
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default transactionSlice.reducer;