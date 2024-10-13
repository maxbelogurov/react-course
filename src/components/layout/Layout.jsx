import styles from './Layout.module.scss'
import ProgressBar from "../progressBar/ProgressBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Cart from '../cart/Cart';
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <>
      <ProgressBar/>
      <Header/>
      <div className={styles.mainRow}>
        <div className={styles.mainWrap}>
          <Outlet/>
        </div>
        <Cart/>
      </div>
      <Footer/>
    </>
  )
}
