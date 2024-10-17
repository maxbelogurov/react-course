import {createEntityAdapter,createSlice} from "@reduxjs/toolkit";
import {getRestaurantReviews} from "./get-reviews";

const reviewsAdapter = createEntityAdapter()

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsAdapter.getInitialState( {requestStatus: 'idle'}),
  selectors: {
    selectReviews: (state) => state.entities,
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurantReviews.pending, (state) => {
        state.requestStatus = 'pending'
      })
      .addCase(getRestaurantReviews.fulfilled, (state, { payload }) => {
        state.requestStatus = 'fulfilled'
        reviewsAdapter.addMany(state, payload)
      })
      .addCase(getRestaurantReviews.rejected, (state) => {
        state.requestStatus = 'rejected'
      })
  }
})

export const {
  selectReviews,
  selectReviewById,
  selectReviewsRequestStatus
} = reviewsSlice.selectors;
