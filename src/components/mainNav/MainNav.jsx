import styles from './MainNav.module.scss'
import {Link} from 'react-router-dom';

export default function MainNav() {
  return (
    <div>
      <Link to='/' className={styles.navItem}>Home</Link>
      <Link to='/restaurants' className={styles.navItem}>Restaurants</Link>
    </div>
  )
}
