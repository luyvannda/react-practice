// import { useState } from "react"


export default function StatePractice() {
  // const [count, setCount] = useState(0)

  /**
  * Challenge: Replace the if/else below with a ternary
  * to determine the text that should display on the page
  */
  const isGoingOut = true

  let answer = isGoingOut ? "Yes" : "No";

  return (
    <>

      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value">
          <h1>{answer}</h1>
        </div>
      </div>

    </>
  )
}