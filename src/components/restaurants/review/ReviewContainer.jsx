import styles from './ReviewsContainer.module.scss'
import Review from './Review'
import ReviewForm from '../reviewForm/ReviewForm';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getRestaurantById} from '../../../redux/restaurants';


export default function ReviewContainer() {
  const { restaurantId } = useParams()
  const restaurantReviews = useSelector((state) => getRestaurantById(state, restaurantId) ).reviews

  if (restaurantReviews.length === 0) { return null }

  return (
    <>
      <div className={styles.reviewsWrap}>
        {restaurantReviews.map(reviewId =>
          <Review key={reviewId} id={reviewId} />
        )}
      </div>

      <div className={styles.reviewForm}>
        <h2 className={styles.reviewsTitle}>Let's write a review</h2>
        <ReviewForm key={restaurantId}/>
      </div>
    </>
  )

}
