import styles from './Header.module.scss'
import { useContext } from 'react';
import {ThemeContext} from "../themeContext/ThemeContext";
import {UserContext} from "../userContext/UserContext";
import Button from "../ui/Button/Button";

export default function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logInUser, logOutUser } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <h1>Restaurants</h1>
      <div className={styles.headerRight}>
        {user.length > 0 && `Hi, ${user}`}
        <Button
          onClick={user.length > 0 ? logOutUser : logInUser}
        >
          {user.length > 0 ? 'Log out' : "Log in"}
        </Button>
        <a onClick={toggleTheme}>{theme}</a>
      </div>
    </header>
  )
}
