import styles from './Button.module.scss'
import classNames from "classnames";
export default function Button( {children, orange, onClick} ) {
  return (
    <button
      onClick={onClick}
      className={orange ? classNames(styles.btn, styles.btn_orange) : styles.btn}
      type='button'>
      { children }
    </button>
  )
}
