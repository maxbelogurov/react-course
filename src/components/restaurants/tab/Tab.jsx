import Button from '../../ui/Button/Button';
import {useSelector} from 'react-redux';
import {getRestaurantById} from '../../../redux/restaurants';

export default function Tab({id, activeId, onClick}) {
  const restaurant = useSelector((state) => getRestaurantById(state, id))
  return (
    <Button
      key={ restaurant.id }
      orange={ activeId === restaurant.id ? true : false }
      onClick={ () => onClick(restaurant.id) }
    >
      { restaurant.name }
    </Button>
  )
}
