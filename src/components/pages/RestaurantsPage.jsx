import {useState} from "react";
import Tabs from "../restaurants/tabs/Tabs";
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
      <Tabs
        activeId={restaurantIdActive}
        onClick={setRestaurantIdActive}
      />
      <div className={styles.restaurantsRow}>
        <Restaurant id={restaurantIdActive}/>
        <Cart />
      </div>
    </>
  )
}
