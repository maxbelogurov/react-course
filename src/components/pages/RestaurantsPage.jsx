import Tab from "../restaurants/tab/Tab"
import styles from "./RestaurantsPage.module.scss"
import { Outlet } from 'react-router-dom'

import {useSelector} from "react-redux";
import { getRestaurantsIds } from "../../redux/restaurants";

export default function RestaurantsPage() {
  const restaurantsIds = useSelector(getRestaurantsIds);

  return (
    <>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) =>
          <Tab key={id} id={id}/>
        )}
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
