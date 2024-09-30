import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProgressBar from "../progressBar/ProgressBar";

export default function Layout({ children }) {
  return (
    <>
      <ProgressBar/>
      <Header/>
      { children }
      <Footer/>
    </>
  )
}
