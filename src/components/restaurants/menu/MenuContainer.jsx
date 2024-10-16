import styles from './MenuContainer.module.scss'
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectRestaurantById} from '../../../redux/restaurants';
import {getRestaurantMenu} from '../../../redux/menu/get-menu';
import {selectAllMenu, selectMenuRequestStatus} from '../../../redux/menu'
import MenuTab from './MenuTab';



export default function MenuContainer() {
  const { restaurantId } = useParams()
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectMenuRequestStatus);

  const restaurantMenuIds = useSelector((state) => selectRestaurantById(state, restaurantId) ).menu
  const allMenu = useSelector(selectAllMenu)

  const checkMenu = restaurantMenuIds.every((id) => { //проверяем есть ли блюда данного ресторана в store
    return allMenu.hasOwnProperty(id)
  })

  useEffect(() => {
    if (!checkMenu) {
      dispatch(getRestaurantMenu(restaurantId));
    }
  }, [dispatch])

  if (requestStatus === 'pending') {
    return (
      <div className={styles.menuWrap}>
        Loading...
      </div>
    )
  }

  return (
    <div className={styles.menuWrap}>
      {restaurantMenuIds.map(menuId =>
        <MenuTab key={menuId} id={menuId}/>
      )}
    </div>
  )
}
