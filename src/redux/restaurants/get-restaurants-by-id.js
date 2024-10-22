import {createAsyncThunk} from "@reduxjs/toolkit";
import { API_URL } from "../api";
import { selectRestaurantById } from ".";

export const getRestaurantById = createAsyncThunk(
    'restaurant/getRestaurantById',
    async (restaurantId) => {
      const response = await fetch(`${API_URL}/restaurant/${restaurantId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
    {
      condition: (restaurantId, { getState }) => {
         const existingRestaurant = selectRestaurantById( getState(), restaurantId);
         
         if (existingRestaurant) {
          return false;
         }
      }
    }
    
  )