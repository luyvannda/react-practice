import { useState } from "react"

/**
     * Challenge: Set up state to track our count (initial value is 0)
     */

export default function StatePractice() {
  const [count, setCount] = useState(0)



  return (
    <div className="counter">
      <button className="counter--minus">–</button>
      <div className="counter--count">
        <h1>0</h1>
      </div>
      <button className="counter--plus">+</button>
    </div>
  )
}