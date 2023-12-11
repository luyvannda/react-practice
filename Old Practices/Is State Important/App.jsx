// import { useState } from 'react'
import './App.scss'
import StatePractice from '../../src/components/statePractice';

function App() {
  // const [count, setCount] = useState(0)

  const thingsArray = ["Thing 1", "Thing 2"];


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
