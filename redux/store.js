import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunk from 'redux-thunk';

import authReducer from "./features/auth/authSlice";
import flightReducer from "./features/flight/flightSlice";
import modalReducer from "./features/modal/modalSlice";
import transactionReducer from "./features/transaction/transactionSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("session") : createNoopStorage();
const persistConfig = {
  key: "shinzou-root",
  storage
}

const rootReducer = combineReducers({
  auth: authReducer,
  flight: flightReducer,
  modal: modalReducer,
  transaction: transactionReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);