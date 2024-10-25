'use client'

import styles from './MenuDetail.module.scss'
import {useContext, useEffect} from "react";
import Counter from "../../common/counter/Counter";
import ArrowBack from "../../icons/ArrowBack"
import {UserContext} from "../../userContext/UserContext";

import {useSelector, useDispatch} from "react-redux";
import {selectMenuById, selectMenuRequestStatus} from "../../../redux/menu"
import {addItem, decreaseItem, selectMenuQuantityInCartById} from '../../../redux/cart';
import {useParams} from 'next/navigation';

import {getRestaurantDishById} from "../../../redux/menu/get-restaurant-dish-by-id";

export default function MenuDetail() {
  const dispatch = useDispatch()
  const { menuId } = useParams()
  const { user } = useContext(UserContext);
  const menu = useSelector((state) => selectMenuById(state, menuId))
  const menuRequest = useSelector(selectMenuRequestStatus)

  useEffect(() => {
    // if (!menu) {
      dispatch(getRestaurantDishById(menuId))
    // }
  }, [dispatch, menuId])

  const count = useSelector((state) => selectMenuQuantityInCartById(state, menuId))

  function increaseCount() {
    if (count < 5) {
      dispatch(addItem({...menu}))
    }
  }
  function decreaseCount() {
    if (count > 0) {
      dispatch(decreaseItem({...menu}))
    }
  }

  if (menuRequest === 'pending') {
    return <div>Dish is loading...</div>
  }
  if (!menu) {
    return <div>Menu not found.</div>;
  }

  return (
    <div className={styles.menuItem}>
      {/*<Link to={-1} className={styles.backBtn}>*/}
      {/*  <ArrowBack/>*/}
      {/*  <span>*/}
      {/*    back*/}
      {/*  </span>*/}
      {/*</Link>*/}
      <div>
        <p className={styles.menuItemName}>{ menu.name }</p>
        {menu.ingredients.length > 0 ? menu.ingredients.map(ingredient =>
          <span key={ingredient} className={styles.ingredient}>{ingredient}</span>
        ): null}
      </div>
      <div className={styles.menuItemFooter}>
        <div className={styles.menuItemPrice}>$ { menu.price }</div>
        {
          user.length > 0 &&
          <Counter
            count={count}
            increase={increaseCount}
            decrease={decreaseCount}
          />
        }
      </div>
    </div>
  )
}
