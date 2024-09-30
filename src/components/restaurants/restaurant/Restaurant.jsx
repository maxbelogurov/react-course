import Menu from "../menu/Menu.jsx"
import Review from "../review/Review";
import ReviewForm from "../reviewForm/ReviewForm";

export default function Restaurant({restaurant}) {
  return (
    <div>
      <h2>{ restaurant.name }</h2>

      {restaurant.menu.length > 0 ? restaurant.menu.map(menu =>
        <Menu key={menu.id} menu={menu} />
      ) : null}<br/>

      {restaurant.reviews.length > 0 ? restaurant.reviews.map(review =>
        <Review key={review.id} review={review} />
      ): null}<br/>

      <h4>Let's write a review</h4>
      <ReviewForm key={restaurant.id}/>
    </div>
  )
}
