import styles from './MenuDetail.module.scss'
import {useContext} from "react";
import Counter from "../../common/counter/Counter";
import {UserContext} from "../../userContext/UserContext";

import {useSelector, useDispatch} from "react-redux";
import {getMenuById} from "../../../redux/menu"
import {addItem, decreaseItem, getMenuQuantityInCartById} from '../../../redux/cart';
import {useParams, Link} from 'react-router-dom';

export default function MenuDetail() {
  const { menuId } = useParams()
  const { user } = useContext(UserContext);
  const menu = useSelector((state) => getMenuById(state, menuId))
  const count = useSelector((state) => getMenuQuantityInCartById(state, menuId))
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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
          <path d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg>
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
