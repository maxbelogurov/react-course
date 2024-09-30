import {useState} from "react";
import Counter from "../../common/counter/Counter";

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
      <Counter
        count={count}
        increase={increaseCount}
        decrease={decreaseCount}
        />
      <br/>
    </div>
  )
}
