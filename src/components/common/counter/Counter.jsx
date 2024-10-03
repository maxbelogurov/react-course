import styles from './Counter.module.scss'

export default function Counter({count, decrease, increase}) {
  return (
    <div>
      <button onClick={decrease} type={'button'}>-</button>
      <span className={styles.counter}>{count}</span>
      <button onClick={increase} type={'button'}>+</button>
    </div>
  )
}
