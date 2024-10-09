import styles from './Restaurant.module.scss'
import Menu from "../menu/Menu.jsx"
import Review from "../review/Review";
import ReviewForm from "../reviewForm/ReviewForm";
import {useSelector} from "react-redux";
import {getRestaurantById} from "../../../redux/restaurants";

export default function Restaurant({ id }) {
  const restaurant = useSelector((state) => getRestaurantById(state, id) )

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurantName}>{ restaurant.name }</h2>

      <div className={styles.menuWrap}>
        {restaurant.menu.length > 0 ? restaurant.menu.map(menuId =>
          <Menu key={menuId} id={menuId}/>
        ) : null}<br/>
      </div>

      <div className={styles.reviewsWrap}>
        <h2 className={styles.reviewsTitle}>Reviews</h2>
        {restaurant.reviews.length > 0 ? restaurant.reviews.map(reviewId =>
          <Review key={reviewId} id={reviewId} />
        ): null}
      </div>

      <div className={styles.reviewForm}>
        <h2 className={styles.reviewsTitle}>Let's write a review</h2>
        <ReviewForm key={id}/>
      </div>

    </div>
  )
}
