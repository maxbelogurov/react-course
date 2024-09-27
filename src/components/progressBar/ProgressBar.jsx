import './ProgressBar.css'
import {useEffect} from "react";
export default function ProgressBar() {

  function startProgressBar() {
    const webPageHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const scrollPercent = ( pageYOffset * 100 / (webPageHeight - windowHeight) )
    const progressBar = document.getElementById('progressBar')
    progressBar.style.width = Math.round(scrollPercent) + '%'
  }

  useEffect(() => {
    window.addEventListener('scroll', startProgressBar)
  }, [])

  return (
    <div id={'progressBar'}></div>
  )
}
