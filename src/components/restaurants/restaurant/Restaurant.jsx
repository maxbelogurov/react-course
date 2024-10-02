import styles from './Restaurant.module.scss'
import Menu from "../menu/Menu.jsx"
import Review from "../review/Review";
import ReviewForm from "../reviewForm/ReviewForm";

export default function Restaurant({restaurant}) {
  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurant_name}>{ restaurant.name }</h2>

      <div className={styles.menu_wrap}>
        {restaurant.menu.length > 0 ? restaurant.menu.map(menu =>
          <Menu key={menu.id} menu={menu}/>
        ) : null}<br/>
      </div>

      <div className={styles.reviews_wrap}>
        <h2 className={styles.reviews_title}>Reviews</h2>
        {restaurant.reviews.length > 0 ? restaurant.reviews.map(review =>
          <Review key={review.id} review={review} />
        ): null}
      </div>

      <div className={styles.review_form}>
        <h2 className={styles.reviews_title}>Let's write a review</h2>
        <ReviewForm key={restaurant.id}/>
      </div>

    </div>
  )
}
