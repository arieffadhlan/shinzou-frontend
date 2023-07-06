import { createSlice } from "@reduxjs/toolkit";
import { checkout, getTransactions, payment, printTicket } from "./transactionAction";

const initialState = {
  transactions: [],
  transactionData: {},
  selectedTransaction: {},
  selectedPaymentMethod: null,
  loading: false,
  success: false,
  error: null
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearTransactionState: (state) => {
      state.transactions = [];
      state.transactionData = [];
      state.selectedTransaction = {};
      state.selectedPaymentMethod = null;
      state.loading = false;
      state.success = false;
      state.error = null;
    },    
    clearTransactionMessage: (state) => {
      state.transactionData = {};
      state.success = false;
    },    
    clearSelectedPaymentMethod: (state) => {
      state.selectedPaymentMethod = null;
    },
    setSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },
    setSelectedPaymentMethod: (state, action) => {
      state.selectedPaymentMethod = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get transactions
    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.data;
      state.loading = false;
      state.success = true;
      
      if (state.transactions.length > 0) {
        state.selectedTransaction = state.transactions[0];
      }
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Checkout
    builder.addCase(checkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.selectedTransaction = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(checkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Payment
    builder.addCase(payment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(payment.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(payment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // Print Ticket
    builder.addCase(printTicket.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(printTicket.fulfilled, (state, action) => {
      state.transactionData = action.payload;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(printTicket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const { 
  clearTransactionState,
  clearTransactionMessage,
  clearSelectedPaymentMethod,
  setSelectedTransaction, 
  setSelectedPaymentMethod 
} = transactionSlice.actions;

export default transactionSlice.reducer;