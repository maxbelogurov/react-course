import RestaurantTab from "../restaurants/tab/RestaurantTab"
import styles from "./RestaurantsPage.module.scss"
import { Outlet } from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import { selectRestaurantsIds, selectRestaurantsRequestStatus } from "../../redux/restaurants";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/get-restaurants";

export default function RestaurantsPage() {
  const dispatch = useDispatch();
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  useEffect(() => {
    dispatch(getRestaurants());
  },[dispatch])

  if (requestStatus === 'pending') {
    return <div>Loading...</div>
  }
  
  if (requestStatus === 'rejected') {
    return <div>Error loading restaurants</div>
  }

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
