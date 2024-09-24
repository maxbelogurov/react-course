import Menu from "../menu/Menu.jsx"
import Review from "../review/Review";

export default function Restaurant({restaurant}) {
  return (
    <div>
      <h3>{ restaurant.name }</h3>

      {restaurant.menu.length > 0 ? restaurant.menu.map(menu =>
        <Menu key={menu.id} menu={menu} />
      ) : null}

      <br/>
      {restaurant.reviews.length > 0 ? restaurant.reviews.map(review =>
        <Review key={review.id} review={review} />
      ): null}
    </div>
  )
}
