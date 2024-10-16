import styles from './ReviewsContainer.module.scss'
import Review from './Review'
import ReviewForm from '../reviewForm/ReviewForm';
import {useParams} from 'react-router-dom';
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../redux/restaurants';
import {selectReviews, selectReviewsRequestStatus} from '../../../redux/reviews'
import {getRestaurantReviews} from "../../../redux/reviews/get-reviews";

export default function ReviewContainer() {
  const { restaurantId } = useParams()
  const dispatch = useDispatch();
  const requestReviewsStatus = useSelector(selectReviewsRequestStatus);

  const restaurantReviewsIds = useSelector((state) => selectRestaurantById(state, restaurantId) ).reviews
  const allReviews = useSelector(selectReviews)


  const checkReview = restaurantReviewsIds.every((id) => { //проверяем есть ли отзывы данного ресторана в store
    return allReviews.hasOwnProperty(id)
  })

  useEffect(() => {
    if (!checkReview && requestReviewsStatus !== 'pending') {
      dispatch(getRestaurantReviews(restaurantId));
    }
  }, [dispatch, checkReview, requestReviewsStatus, restaurantId])

  if (requestReviewsStatus === 'pending') {
    return (
      <div className={styles.reviewsWrap}>
        Loading...
      </div>
    )
  }

  return (
    <>
      <div className={styles.reviewsWrap}>
        {restaurantReviewsIds.map(reviewId =>
          // <ul key={reviewId}>{reviewId}</ul>
          <Review key={reviewId} id={reviewId} />
        )}
      </div>

      <div className={styles.reviewForm}>
        <h2 className={styles.reviewsTitle}>Write a review</h2>
        <ReviewForm key={restaurantId}/>
      </div>
    </>
  )

}
