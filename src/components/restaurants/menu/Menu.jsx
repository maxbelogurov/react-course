import styles from './Menu.module.scss'
import {useContext} from "react";
import Counter from "../../common/counter/Counter";
import {UserContext} from "../../userContext/UserContext";

import {useSelector, useDispatch} from "react-redux";
import {getMenuById} from "../../../redux/menu"
import {addItem, decreaseItem, getMenuQuantityInCartById} from '../../../redux/cart';

export default function Menu({id}) {
  const { user } = useContext(UserContext);
  const menu = useSelector((state) => getMenuById(state, id))
  const count = useSelector((state) => getMenuQuantityInCartById(state, id))
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
