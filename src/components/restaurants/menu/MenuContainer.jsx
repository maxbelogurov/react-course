import styles from './MenuContainer.module.scss'
import Menu from './Menu'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getRestaurantById} from '../../../redux/restaurants';

export default function MenuContainer() {
  const { restaurantId } = useParams()
  const restaurantMenu = useSelector((state) => getRestaurantById(state, restaurantId) ).menu

  if (restaurantMenu.length === 0) { return null }

  return (
    <div className={styles.menuWrap}>
      {restaurantMenu.map(menuId =>
        <Menu key={menuId} id={menuId}/>
      )}
    </div>
  )
}
