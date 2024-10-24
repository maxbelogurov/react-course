'use client';

import styles from './Layout.module.scss'
import ProgressBar from "../progressBar/ProgressBar";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Cart from '../cart/Cart';

export default function Layout( {children} ) {
  return (
    <>
      <ProgressBar/>
      <Header/>
      <div className={styles.mainRow}>
        <div className={styles.mainWrap}>
          {children}
        </div>
        <Cart/>
      </div>
      <Footer/>
    </>
  )
}
