import {useState} from "react";
import Tabs from "../restaurants/tabs/Tabs";
import Restaurant from "../restaurants/restaurant/Restaurant";
import {useSelector} from "react-redux";
import { getRestaurantsIds } from "../../redux/restaurants";
// import {restaurants} from "../../constants/mock";



export default function RestaurantsPage() {
  const restaurantsIds = Object.values(useSelector(getRestaurantsIds));

  const [restaurantIdActive, setRestaurantIdActive] = useState(restaurantsIds[0])

  return (
    <>
      <Tabs
        activeId={restaurantIdActive}
        onClick={setRestaurantIdActive}
      />
      <Restaurant id={restaurantIdActive}/>
    </>
  )
}
