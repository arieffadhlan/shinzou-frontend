import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:8000/api/v1";

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