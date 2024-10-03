import styles from './Restaurant.module.scss'
import Menu from "../menu/Menu.jsx"
import Review from "../review/Review";
import ReviewForm from "../reviewForm/ReviewForm";

export default function Restaurant({restaurant}) {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurantName}>{ restaurant.name }</h2>

      <div className={styles.menuWrap}>
        {restaurant.menu.length > 0 ? restaurant.menu.map(menu =>
          <Menu key={menu.id} menu={menu}/>
        ) : null}<br/>
      </div>

      <div className={styles.reviewsWrap}>
        <h2 className={styles.reviewsTitle}>Reviews</h2>
        {restaurant.reviews.length > 0 ? restaurant.reviews.map(review =>
          <Review key={review.id} review={review} />
        ): null}
      </div>

      <div className={styles.reviewForm}>
        <h2 className={styles.reviewsTitle}>Let's write a review</h2>
        <ReviewForm key={restaurant.id}/>
      </div>

    </div>
  )
}
