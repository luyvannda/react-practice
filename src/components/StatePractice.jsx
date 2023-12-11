import { useState } from "react"

export default function StatePractice() {
  const [isImportant, setIsImportant] = useState("Yes")

  /**
      * Challenge: 
      * 1. Create a function called `handleClick` that runs
      *    setIsImportant("No")
      * 2. add a click event listener to the div.state--value
      *    that runs `handleClick` when the div is clicked.
      */
  function handleClick() {
    return setIsImportant("No");
  }

  return (
    <>
      <div className="state">
        <h1 className="state--title">Is state important to know?</h1>
        <button onClick={handleClick} className="state--value">
          <h1>{isImportant}</h1>
        </button>
      </div>

    </>
  )
}