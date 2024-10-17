import styles from './ProgressBar.module.scss'
import {useEffect, useState} from "react";

export default function ProgressBar() {
  const [barWidth, setBarWidth] = useState(0)

  function startProgressBar() {
    const webPageHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = ( pageYOffset * 100 / (webPageHeight - windowHeight) )
    setBarWidth(Math.round(scrollPercent))
  }

  useEffect(() => {
    window.addEventListener('scroll', startProgressBar)
    return () => {
      window.removeEventListener('scroll', startProgressBar)
    }
  }, [])


  return (
    <div style={{ width: barWidth + '%' }} className={styles.progressBar}></div>
  )
}
