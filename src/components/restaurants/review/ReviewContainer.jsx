'use client'

import styles from './ReviewsContainer.module.scss'
import Review from './Review'
import ReviewForm from '../reviewForm/ReviewForm';
import {useParams} from 'next/navigation';
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../redux/restaurants';
import {selectReviewsRequestStatus} from '../../../redux/reviews'
import {getRestaurantReviews} from "../../../redux/reviews/get-reviews";

export default function ReviewContainer() {
  const { restaurantId } = useParams()
  const dispatch = useDispatch();
  const requestReviewsStatus = useSelector(selectReviewsRequestStatus);

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId) )
  const restaurantReviewsIds = restaurant.reviews

  useEffect(() => {
    dispatch(getRestaurantReviews(restaurantId));
  }, [dispatch, restaurantId])

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
