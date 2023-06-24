import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import flightReducer from "./features/flight/flightSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})