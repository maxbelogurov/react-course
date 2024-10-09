import styles from './Tabs.module.scss'
import classNames from "classnames";
import Button from "../../ui/Button/Button";
import {useSelector} from "react-redux";
import {getRestaurants} from "../../../redux/restaurants";

export default function Tabs({activeId, onClick}) {
  const restaurants = Object.values(useSelector(getRestaurants));

  return (
    <div className={styles.tabs}>
      {restaurants.map(restaurant =>
          <Button
            key={ restaurant.id }
            orange={ activeId === restaurant.id ? true : false }
            onClick={ () => onClick(restaurant.id) }
          >
            { restaurant.name }
          </Button>
      )}
    </div>
  )
}
