import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://shinzou-api.up.railway.app/api/v1";
const config = {
  headers: {
    "Content-Type": "application/json"
  }
}

export const updateProfile = createAsyncThunk("updateProfile", 
  async ({ id, name, email, phone_number }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${url}/user/${id}`, {
        name,
        email,
        phone_number,
      }, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const registerUser = createAsyncThunk("auth/register", 
  async ({ name, email, phone_number, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/register`, {
        name,
        email,
        phone_number,
        password
      }, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const verifyOTP = createAsyncThunk(`auth/verify`, 
  async ({ otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/verify/`, {
        otp
      }, config);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const resendOTP = createAsyncThunk(`auth/resend-otp`, 
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/resend-otp/${id}`, {}, config);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const loginUser = createAsyncThunk("auth/login", 
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/login`, {
        email,
        password
      }, config);

      localStorage.setItem("token", response.data.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const forgotPassword = createAsyncThunk("auth/forgot-password", 
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/forgot-password`, {
        email,
      }, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const resetPassword = createAsyncThunk("auth/reset-password", 
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/reset-password/${token}`, {
        password,
      }, config);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);