import {createSlice} from "@reduxjs/toolkit";

import { normalizedRestaurants } from "../../constants/normalized-mock"

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((result, item) => {
    return {
      ...result,
      [item.id]: item
    }
  }, {}),
}

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    getRestaurantsIds: (state) => state.ids,
    getRestaurantById: (state, id) => state.entities[id]
  }
})

export const { getRestaurantsIds, getRestaurantById } = restaurantsSlice.selectors
