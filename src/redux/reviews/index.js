import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../constants/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((result, item) => {
    return {
      ...result,
      [item.id]: item,
    }
  }, {})
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    getReviewById: (state, id) => state.entities[id]
  }
})

export const { getReviewById } = reviewsSlice.selectors;
