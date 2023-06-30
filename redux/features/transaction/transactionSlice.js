import { createSlice } from "@reduxjs/toolkit";
import { checkout, getTransactions } from "./transactionAction";

const initialState = {
  transactions: [],
  selectedTransaction: {},
  loading: false,
  success: false,
  error: null
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get transactions
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Checkout
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