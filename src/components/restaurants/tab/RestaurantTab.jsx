import Button from '../../ui/Button/Button';
import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../../redux/restaurants';
import Link from 'next/link';

export default function RestaurantTab({id}) {

  const restaurant = useSelector((state) => selectRestaurantById(state, id))
  return (
    <Link href={`/restaurants/${id}`}>
      <Button>
        { restaurant.name }
      </Button>
    </Link>
  )
}
