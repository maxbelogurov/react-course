import {createEntityAdapter,createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./get-users";

const usersAdapter = createEntityAdapter()

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({requestStatus: 'idle'}),
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectUsersRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = 'pending'
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = 'fulfilled'
        usersAdapter.setAll(state, payload)
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = 'rejected'
      })
  }
})

export const { selectUsersIds, selectUserById, selectUsersRequestStatus } = usersSlice.selectors;
