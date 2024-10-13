import styles from "./Cart.module.scss"
import Counter from '../common/counter/Counter';
import CartItem from "./cartItem/CartItem";
import {useSelector, useDispatch} from 'react-redux';
import {addItem, decreaseItem, removeItem, clearCart, selectCartItems, selectCartTotal} from '../../redux/cart';

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (Object.keys(items).length === 0) {
    return (
      <div className={styles.cartWrap}>
        <p className={styles.cartTitle}>Cart is empty</p>
      </div>
    )
  }

  return (
    <div className={styles.cartWrap}>
      <p className={styles.cartTitle}>My cart</p>
      <div>
        <ul>
          {Object.entries(items).map( ([id, item]) =>
            <CartItem key={id} item={item} id={id}/>
          )}
        </ul>
        <div className={styles.cartFooter}>
          <button onClick={() => dispatch(clearCart())}>clear </button>
          <div>
            Total: {total}
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
