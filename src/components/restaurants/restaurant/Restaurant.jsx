'use client'

import styles from './Restaurant.module.scss'

import {useSelector, useDispatch} from "react-redux";
import {selectRestaurantById, selectRestaurantsRequestStatus} from "../../../redux/restaurants";

import {useParams} from 'next/navigation';
import Link from "next/link";
import {useEffect} from 'react';
import {getRestaurantById} from '../../../redux/restaurants/get-restaurants-by-id';

export default function Restaurant({children}) {
  const { restaurantId } = useParams()
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId) )
  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  useEffect(() => {
      dispatch(getRestaurantById(restaurantId));
  }, [dispatch, restaurantId])

  if (!restaurant || requestStatus === 'pending') {
    return <div>Loading...</div>
  }

  if (requestStatus === 'rejected') {
    return <div>Error loading restaurants</div>
  }

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.restaurantName}>{ restaurant.name }</h2>

      <div className={styles.tabs}>
        <Link href={`/restaurants/${restaurantId}/menu/`}> Menu </Link>
        <Link href={`/restaurants/${restaurantId}/reviews/`}> Reviews </Link>
      </div>

      {children}

    </div>
  )
}
