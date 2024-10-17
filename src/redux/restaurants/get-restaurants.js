import {createAsyncThunk} from "@reduxjs/toolkit";
import { API_URL } from "../api";
import { selectRestaurantsIds } from ".";

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async () => {
      const response = await fetch(`${API_URL}/restaurants/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
    {
      condition: (_, { getState }) => {
        return selectRestaurantsIds(getState()).length === 0
      }
    }
  );
