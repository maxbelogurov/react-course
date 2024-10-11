import {Provider} from "react-redux";
import {store} from "../../redux/store";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider";
import { UserContextProvider } from "../userContext/UserContextProvider";
import Layout from "../layout/Layout";
import HomePage from '../pages/HomePage';
import RestaurantsPage from "../pages/RestaurantsPage"
import Restaurant from "../restaurants/restaurant/Restaurant"
import MenuContainer from '../restaurants/menu/MenuContainer';

import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import ReviewContainer from '../restaurants/review/ReviewContainer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'restaurants',
        element: <RestaurantsPage/>,
        children: [
          {
            path: ':restaurantId',
            element: <Restaurant/>,
            children: [
              {
                index: true,
                element: <Navigate to='menu'/>
              },
              {
                path: 'menu',
                element: <MenuContainer/>
              },
              {
                path: 'reviews',
                element: <ReviewContainer/>
              }
            ]
          }
        ]
      }
    ]
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router}/>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

