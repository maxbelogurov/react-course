import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_URL} from "../api";
import {selectReviews} from '.'
import {selectRestaurantById} from "../restaurants";

export const getRestaurantReviews = createAsyncThunk(
  'restaurant/getRestaurantReviews',
  async (restaurantId) => {
    const response = await fetch(`${API_URL}/reviews?restaurantId=${restaurantId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  },
  {
    condition: (restaurantId, {getState}) => {
      const restaurant = selectRestaurantById(getState(), restaurantId)
      const restaurantReviewsIds = restaurant.reviews
      const allReviews = selectReviews(getState())

      const checkMenu = restaurantReviewsIds.every((id) => { //проверяем есть ли отызвы данного ресторана в store
        return allReviews.hasOwnProperty(id)
      })

      if (checkMenu) {
        return false;
      }
    }
  }
)
