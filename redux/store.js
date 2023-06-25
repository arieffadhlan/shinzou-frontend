import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import flightReducer from "./features/flight/flightSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})