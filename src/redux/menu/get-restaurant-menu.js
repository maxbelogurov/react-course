import {createAsyncThunk} from "@reduxjs/toolkit";
import { API_URL } from "../api";
import {selectRestaurantById} from '../restaurants'
import {selectAllMenu} from '.'

export const getRestaurantMenu = createAsyncThunk(
  'menu/getRestaurantMenu',
  async (restaurantId) => {
    const response = await fetch(`${API_URL}/dishes?restaurantId=${restaurantId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const restaurant = selectRestaurantById( getState(), restaurantId )
      const restaurantMenuIds = restaurant.menu
      const allMenu = selectAllMenu(getState())

      const checkMenu = restaurantMenuIds.every((id) => { //проверяем есть ли блюда данного ресторана в store
        return allMenu.hasOwnProperty(id)
      })

      if (checkMenu) {
       return false;
      }
   }
  }
)

