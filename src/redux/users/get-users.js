import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../api";

export const getUsers = createAsyncThunk(
  'restaurant/getUsers',
  async () => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
)
