import Button from '../../ui/Button/Button';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../redux/restaurants';
import {NavLink} from 'react-router-dom';

export default function RestaurantTab({id}) {

  const restaurant = useSelector((state) => selectRestaurantById(state, id))
  return (
    <NavLink to={id}>
      <Button>
        { restaurant.name }
      </Button>
    </NavLink>

  )
}
