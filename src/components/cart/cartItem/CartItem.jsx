import styles from "./CartItem.module.scss";
import Counter from "../../common/counter/Counter";
import {addItem, decreaseItem, removeItem} from "../../../redux/cart";
import {useDispatch} from "react-redux";

export default function CartItem({id, item}) {
  const dispatch = useDispatch()

  const increaseCount = (item) => {
    dispatch(addItem({...item}))
  }
  function decreaseCount(item) {
    dispatch(decreaseItem({...item}))
  }


  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItemBody}>
        {item.name}
        <span className={styles.cartItemPrice}>
                  {item.price} $
                </span>
        <div className={styles.cartCounter}>
          <Counter
            count={item.quantity}
            increase={() => increaseCount({...item, id})}
            decrease={() => decreaseCount({...item, id})}
          />
        </div>

      </div>
      <a className={styles.removeBtn}
         onClick={() => dispatch(removeItem(id))}>x</a>
    </li>
  )
}
