import styles from './MainNav.module.scss'
import {Link} from 'react-router-dom';
import Button from '../ui/Button/Button';

export default function MainNav() {
  return (
    <div>
      <Link to='/' className={styles.navItem}>
        <Button>Home</Button>
      </Link>
      <Link to='/restaurants' className={styles.navItem}>
        <Button>Restaurants</Button>
      </Link>
    </div>
  )
}
