import { useState } from "react"

/** 
 * * Challenge: Set up state to track our count (initial value is 0)
*/

export default function StatePractice() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <button className="counter--minus" onClick={() => setCount(count - 1)}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}