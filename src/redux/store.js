import {configureStore} from "@reduxjs/toolkit";
import {restaurantsSlice} from "./restaurants";
import {menuSlice} from "./menu";
import {reviewsSlice} from "./reviews";
import {usersSlice} from "./users";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
