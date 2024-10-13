import {createSlice} from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((result, item) => {
    return {
      ...result,
      [item.id]: item
    }
  }, {}),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id]
  }
})

export const { selectUserById } = usersSlice.selectors;
