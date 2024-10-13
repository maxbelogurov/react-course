import {createSlice} from "@reduxjs/toolkit";
import { normalizedDishes } from "../../constants/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((result, item) => {
      return {
        ...result,
        [item.id]: item
      }
    }, {}),
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    selectors: {
      selectMenuById: (state, id) => state.entities[id]
    }
  })

export const { selectMenuById } = menuSlice.selectors;
