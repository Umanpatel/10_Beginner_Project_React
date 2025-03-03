import { useState } from "react"
import "../counter.css";
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
  return (
    <div className="container">
      <h1>1: Counter</h1>
        <div>
            <h1 className="number">{count}</h1>
        </div>
        <div className="btns-containers">
            <button onClick={increment} className="increment">+</button>
            <button onClick={decrement} className="increment">-</button>
        </div>
    </div>
  )
}

export default Counter;