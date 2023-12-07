// import { useState } from 'react'
import './App.scss'
import StatePractice from './components/statePractice';

function App() {
  // const [count, setCount] = useState(0)

  const thingsArray = ["Thing 1", "Thing 2"];

  /**
   * Challenge: Add an event listener to the button so when
   * it is clicked, it adds another thing to our array
   * 
   * Hint: use the array length + 1 to determine the number
   * of the "Thing" being added. Also, have you event listener
   * console.log(thingsArray) after adding the new item to the
   * array
   * 
   * Spoiler: the page won't update when new things get added
   * to the array!
   */

  function mapOver() {
    return thingsArray.map((thing, index) => (
      <p key={index}> {thing}</p>
    ));
  }

  function addThing() {
    const newThing = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThing);
    console.log(thingsArray);
  }

  return (
    <div>
      <button onClick={addThing}>Add Item</button>
      {mapOver()}

      <StatePractice />
    </div>
  )
}

export default App
