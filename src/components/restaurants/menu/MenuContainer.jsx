import styles from './MenuContainer.module.scss'
import MenuDetail from './MenuDetail'
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../redux/restaurants';
import MenuTab from './MenuTab';

export default function MenuContainer() {
  const { restaurantId } = useParams()
  const restaurantMenu = useSelector((state) => selectRestaurantById(state, restaurantId) ).menu

  if (restaurantMenu.length === 0) { return null }

  return (
    <div className={styles.menuWrap}>
      {restaurantMenu.map(menuId =>
        <MenuTab key={menuId} id={menuId}/>
      )}
    </div>
  )
}
