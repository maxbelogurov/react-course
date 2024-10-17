import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurantMenu} from './get-restaurant-menu';
import {getRestaurantDishById} from "./get-restaurant-dish-by-id";

const menuAdapter = createEntityAdapter()

export const menuSlice = createSlice({
    name: 'menu',
    initialState: menuAdapter.getInitialState({ requestStatus: 'idle' }),
    selectors: {
      selectAllMenu: (state) => state.entities,
      selectMenuIds: (state, id) => state.ids,
      selectMenuById: (state, id) => state.entities[id],
      selectMenuRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getRestaurantMenu.pending, (state) => {
          state.requestStatus = 'pending'
        })
        .addCase(getRestaurantMenu.fulfilled, (state, { payload }) => {
          state.requestStatus = 'fulfilled'
          menuAdapter.addMany(state, payload)
        })
        .addCase(getRestaurantMenu.rejected, (state) => {
          state.requestStatus = 'rejected'
        })
        .addCase(getRestaurantDishById.pending, (state) => {
          state.requestStatus = 'pending'
        })
        .addCase(getRestaurantDishById.fulfilled, (state, { payload }) => {
          state.requestStatus = 'fulfilled'
          menuAdapter.upsertOne(state, payload)
        })
    }
  })

export const {
  selectMenuById,
  selectMenuIds,
  selectAllMenu,
  selectMenuRequestStatus
} = menuSlice.selectors;
