import styles from './Tabs.module.scss'
import classNames from "classnames";
import Button from "../../ui/Button/Button";

export default function Tabs({restaurants, activeRestaurant, onClick}) {
  return (
    <div className={styles.tabs}>
      {restaurants.map(restaurant =>
          <Button
            key={ restaurant.id }
            orange={ activeRestaurant === restaurant.id ? true : false }
            onClick={ () => onClick(restaurant) }
          >
            { restaurant.name }
          </Button>
      )}
    </div>
  )
}
