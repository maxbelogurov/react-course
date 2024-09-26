import './Menu.css'
import {useState} from "react";

export default function Menu({menu}) {
  const [count, setCount] = useState(0)

  function increaseCount() {
    count < 5 ? setCount(count + 1) : null
  }
  function decreaseCount() {
    count > 0 ? setCount(count - 1) : null
  }

  return (
    <div>
      <p>{ menu.name } - <span>{ menu.price } $</span></p>
      <div>
        <button onClick={decreaseCount}>-</button>
        <span className={'menu-count'}>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <br/>
    </div>
  )
}
