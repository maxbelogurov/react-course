import styles from './Menu.module.scss'
import {useContext, useState} from "react";
import Counter from "../../common/counter/Counter";
import {UserContext} from "../../userContext/UserContext";

export default function Menu({menu}) {
  const [count, setCount] = useState(0)
  const { user } = useContext(UserContext);

  function increaseCount() {
    count < 5 ? setCount(count + 1) : null
  }
  function decreaseCount() {
    count > 0 ? setCount(count - 1) : null
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
