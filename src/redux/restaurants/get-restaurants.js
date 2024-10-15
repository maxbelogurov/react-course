import {createAsyncThunk} from "@reduxjs/toolkit";
import { API_URL } from "../api";

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async () => {
      const response = await fetch(`${API_URL}/restaurants/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    }
  );

export const getRestaurantById = createAsyncThunk(
  'restaurant/getRestaurantById',
  async (restaurantId) => {
    const response = await fetch(`${API_URL}/restaurant/${restaurantId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
)
