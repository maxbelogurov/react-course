import Button from '../../ui/Button/Button';
import {useSelector} from 'react-redux';
import {getRestaurantById} from '../../../redux/restaurants';
import {NavLink} from 'react-router-dom';

export default function Tab({id}) {

  const restaurant = useSelector((state) => getRestaurantById(state, id))
  return (
    <NavLink to={id}>
      <Button>
        { restaurant.name }
      </Button>
    </NavLink>

  )
}
