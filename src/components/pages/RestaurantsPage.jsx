import RestaurantTab from "../restaurants/tab/RestaurantTab"
import styles from "./RestaurantsPage.module.scss"
import { Outlet } from 'react-router-dom'

import {useSelector} from "react-redux";
import { selectRestaurantsIds } from "../../redux/restaurants";

export default function RestaurantsPage() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) =>
          <RestaurantTab key={id} id={id}/>
        )}
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
