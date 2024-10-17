const initialState = {
  name: '',
  review: '',
  rating: 1,
}
const formReducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.payload
      }
    case 'setReview':
      return {
        ...state,
        review: action.payload
      }
    case 'ratingDecrease':
      return {
        ...state,
        rating: state.rating > 1 ? state.rating - 1 : 1
      }
    case 'ratingIncrease':
      return {
        ...state,
        rating: state.rating < 5 ? state.rating + 1 : 5
      }
    case 'resetForm':
      return {
        ...initialState
      }
    default:
      return state
  }
}
export { initialState, formReducer };
