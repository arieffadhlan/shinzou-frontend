import { createSlice } from "@reduxjs/toolkit";
import { getNotifications } from "./notificationAction";

const initialState = {
  notifications: [],
  loading: false,
  success: false,
  error: null
}

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get transactions
    builder.addCase(getNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(getNotifications.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default notificationSlice.reducer;