import './ReviewForm.css'
import Counter from "../../common/counter/Counter";
import {useState, useReducer} from "react";

const FORM_VALUE = {
  name: '',
  review: '',
  rating: 1,
}

export const reducer = (state, action) => {
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
        ...FORM_VALUE
      }
    default:
      return state
  }
}

export default function ReviewForm() {
  const [form, dispatch] = useReducer(reducer, FORM_VALUE)
  const { name, review, rating } = form

  return (
    <div>
    <form className={'review-form'}>
      <div className={'form-section'}>
        <label htmlFor="name">Name</label><br/>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => { dispatch({type: 'setName', payload: e.target.value}) }}
        />
      </div>

      <div className={'form-section'}>
        <span>Rating</span><br/>
        <Counter
          count={rating}
          decrease={ () => dispatch({ type: 'ratingDecrease' }) }
          increase={ () => dispatch({ type: 'ratingIncrease' }) }
        />
      </div>

      <div className={'form-section'}>
        <label htmlFor="review">Review</label><br/>
        <textarea
          id="review"
          value={review}
          onChange={(e) => { dispatch({ type: 'setReview', payload: e.target.value }) }}
        />
      </div>

      <div className={'form-section form-footer'}>
        <button type={'button'}>Send</button>
        <button
          type={'button'}
          onClick={ () => dispatch({ type: 'resetForm' }) }
        >Clear</button>
      </div>

    </form>

    </div>
  )
}
