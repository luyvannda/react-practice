import { useState } from "react"


/**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */


export default function StatePractice() {
  const [isGoingOut, setIsGoingOut] = useState(true)

  function handleClick() {
    setIsGoingOut((going) => !going)
  }

  return (
    <>

      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <button onClick={handleClick} className="state--value">
          {isGoingOut ? "Yes" : "No"}
        </button>
      </div>

    </>
  )
}