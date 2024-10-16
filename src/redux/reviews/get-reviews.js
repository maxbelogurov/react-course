import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../api";

export const getRestaurantReviews = createAsyncThunk(
  'restaurant/getRestaurantReviews',
  async (restaurantId) => {
    const response = await fetch(`${API_URL}/reviews?restaurantId=${restaurantId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
)
