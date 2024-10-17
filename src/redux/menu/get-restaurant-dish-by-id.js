import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../api";

export const getRestaurantDishById = createAsyncThunk(
  'menu/getRestaurantDishById',
  async (dishId) => {
    const response = await fetch(`${API_URL}/dish/${dishId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
)
