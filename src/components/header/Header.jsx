import styles from './Header.module.scss'
import { useContext } from 'react';
import {ThemeContext} from "../themeContext/ThemeContext";
import {UserContext} from "../userContext/UserContext";
import MainNav from '../mainNav/MainNav';
import Button from "../ui/Button/Button";
import WatchDisplay from '../watchDisplay/WatchDisplay'

export default function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logInUser, logOutUser } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <h1>React course</h1>
      <MainNav/>
      <WatchDisplay/>
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
