import styles from './MenuDetail.module.scss'
import {useContext} from "react";
import Counter from "../../common/counter/Counter";
import ArrowBack from "../../icons/ArrowBack"
import {UserContext} from "../../userContext/UserContext";

import {useSelector, useDispatch} from "react-redux";
import {selectMenuById} from "../../../redux/menu"
import {addItem, decreaseItem, selectMenuQuantityInCartById} from '../../../redux/cart';
import {useParams, Link} from 'react-router-dom';

export default function MenuDetail() {
  const { menuId } = useParams()
  const { user } = useContext(UserContext);
  const menu = useSelector((state) => selectMenuById(state, menuId))
  const count = useSelector((state) => selectMenuQuantityInCartById(state, menuId))
  const dispatch = useDispatch();

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

  return (
    <div className={styles.menuItem}>
      <Link to={-1} className={styles.backBtn}>
        <ArrowBack/>
        <span>
          back
        </span>
      </Link>
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
