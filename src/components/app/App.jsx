import './App.css'
import Layout from "../layout/Layout";
import Tabs from "../restaurants/tabs/Tabs";
import Restaurant from "../restaurants/restaurant/Restaurant";

import {useState} from "react";

import {restaurants} from "../../constants/mock";

export default function App() {
  const [restaurantActive, setRestaurantActive] = useState(restaurants[0])

  return (
    <Layout>
      <main>
        <Tabs
          restaurants={ restaurants }
          activeRestaurant={ restaurantActive.name }
          onClick={ setRestaurantActive }
        />
        <Restaurant restaurant={ restaurantActive }/>
      </main>
    </Layout>
  )
}

