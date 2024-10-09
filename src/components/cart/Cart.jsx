import styles from "./Cart.module.scss"
import Counter from '../common/counter/Counter';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, decreaseItem, removeItem, clearCart, getCartItems, getCartTotal} from '../../redux/cart';

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(getCartItems)
  const total = useSelector(getCartTotal)

  const increaseCount = (item) => {
    dispatch(addItem({...item}))
  }
  function decreaseCount(item) {
    dispatch(decreaseItem({...item}))
  }

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
            <li className={styles.cartItem} key={id}>
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
