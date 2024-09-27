import './Counter.css'

export default function Counter({count, decrease, increase}) {
  return (
    <div>
      <button onClick={decrease} type={'button'}>-</button>
      <span className={'counter'}>{count}</span>
      <button onClick={increase} type={'button'}>+</button>
    </div>
  )
}
