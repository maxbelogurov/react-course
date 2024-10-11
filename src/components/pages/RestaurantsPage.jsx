import {useState} from "react";
import Tab from "../restaurants/tab/Tab"
import Restaurant from "../restaurants/restaurant/Restaurant";
import Cart from '../cart/Cart';
import styles from "./RestaurantsPage.module.scss"

import {useSelector} from "react-redux";
import { getRestaurantsIds } from "../../redux/restaurants";

export default function RestaurantsPage() {
  const restaurantsIds = useSelector(getRestaurantsIds);
  const [restaurantIdActive, setRestaurantIdActive] = useState(restaurantsIds[0])

  return (
    <>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) =>
          <Tab
            key={id}
            id={id}
            activeId={restaurantIdActive}
            onClick={setRestaurantIdActive}
          />
        )}
      </div>
      <div className={styles.restaurantsRow}>
        <Restaurant id={restaurantIdActive}/>
        <Cart />
      </div>
    </>
  )
}
