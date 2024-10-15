import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

import {getRestaurants} from './get-restaurants'

const restaurantsAdapter = createEntityAdapter()

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: restaurantsAdapter.getInitialState({ requestStatus: 'idle' }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => { //для состояний загрузки
        state.requestStatus = 'pending'
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => { // Логика для успешного получения данных
        state.requestStatus = 'fulfilled'
        restaurantsAdapter.setAll(state, payload)
      })
      .addCase(getRestaurants.rejected, (state) => { // Логика для обработки ошибок
        state.requestStatus = 'rejected'
      });
  }
})

export const { 
  selectRestaurantsIds, 
  selectRestaurantById, 
  selectRestaurantsRequestStatus 
} = restaurantsSlice.selectors
