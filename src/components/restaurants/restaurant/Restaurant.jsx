import styles from './Restaurant.module.scss'

import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../redux/restaurants";

import {useParams, Outlet, NavLink} from 'react-router-dom';


export default function Restaurant() {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId) )

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurantName}>{ restaurant.name }</h2>

      <div className={styles.tabs}>
        <NavLink to={'menu'}
              className={({isActive}) => isActive ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`}>
          Menu
        </NavLink>
        <NavLink to={'reviews'}
                 className={({isActive}) => isActive ? `${styles.tabItem} ${styles.active}` : `${styles.tabItem}`}>
          Reviews
        </NavLink>
      </div>

      <Outlet/>

    </div>
  )
}
