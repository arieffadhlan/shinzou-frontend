import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://shinzou-api.up.railway.app/api/v1";

export const getNotifications = createAsyncThunk("getNotifications", 
  async () => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.get(`${url}/notification`, {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      return response.data;
    } catch (error) {
      return error.response.data
    }
  }
);

export const markAsRead = createAsyncThunk("markAsRead", 
  async () => {
    try {      
      const token = localStorage.getItem("token");

      const response = await axios.get(`${url}/notification/mark-as-read`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });


      return response.data;
    } catch (error) {
      return error.response.data
    }
  }
);