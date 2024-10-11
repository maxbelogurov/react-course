import {Provider} from "react-redux";
import {store} from "../../redux/store";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider";
import { UserContextProvider } from "../userContext/UserContextProvider";
import Layout from "../layout/Layout";
import RestaurantsPage from "../pages/RestaurantsPage"


export default function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <main>
              <RestaurantsPage/>
            </main>
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  )
}

