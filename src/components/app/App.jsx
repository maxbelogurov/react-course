import Layout from "../layout/Layout";
import Tabs from "../restaurants/tabs/Tabs";
import Restaurant from "../restaurants/restaurant/Restaurant";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider";
import { UserContextProvider } from "../userContext/UserContextProvider";

import {useState} from "react";

import {restaurants} from "../../constants/mock";

export default function App() {
  const [restaurantActive, setRestaurantActive] = useState(restaurants[0])

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <main>
            <Tabs
              restaurants={ restaurants }
              activeRestaurant={ restaurantActive.id }
              onClick={ setRestaurantActive }
            />
            <Restaurant restaurant={ restaurantActive }/>
          </main>
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

