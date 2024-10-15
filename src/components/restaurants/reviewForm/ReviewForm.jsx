import styles from './ReviewForm.module.scss'
import Counter from "../../common/counter/Counter";
import Button from "../../ui/Button/Button";
import {useReducer} from "react";
import classNames from "classnames";
import { formReducer, initialState } from './ReviewFormReducer';

export default function ReviewForm() {
  const [form, dispatch] = useReducer(formReducer, initialState)
  const { name, review, rating } = form

  return (
    <div>
    <form className={styles.reviewForm}>
      <div className={styles.formSection}>
        <label className={styles.formLabel} htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => { dispatch({type: 'setName', payload: e.target.value}) }}
        />
      </div>

      <div className={styles.formSection}>
        <span className={styles.formLabel}>Rating</span>
        <Counter
          count={rating}
          decrease={ () => dispatch({ type: 'ratingDecrease' }) }
          increase={ () => dispatch({ type: 'ratingIncrease' }) }
        />
      </div>

      <div className={styles.formSection}>
        <label className={styles.formLabel} htmlFor="review">Review</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => { dispatch({ type: 'setReview', payload: e.target.value }) }}
        />
      </div>

      <div className={classNames(styles.formSection, styles.formFooter)}>
        <Button orange={true}>Send</Button>
        <Button onClick={ () => dispatch({ type: 'resetForm' })}>Clear</Button>
      </div>

    </form>

    </div>
  )
}
