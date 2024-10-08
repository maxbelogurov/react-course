import styles from './Button.module.scss'
import classNames from "classnames";
import { useContext } from 'react';
import {ThemeContext} from "../../themeContext/ThemeContext";

export default function Button( {children, orange, onClick} ) {

  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      className={classNames(styles.btn, {
        [styles.btn_orange]: orange === true,
        [styles.btn_dark]: theme === 'dark'
      })}
      type='button'>
      { children }
    </button>
  )
}
