import { useState } from "react"

export default function StatePractice() {

  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

  function addItem() {
    const newThingsArray = `Thing ${thingsArray.length + 1}`;

    setThingsArray((prevThingsArray) => [...prevThingsArray, newThingsArray])
  }

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  return (
    <>
      <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
      </div>

    </>
  )
}