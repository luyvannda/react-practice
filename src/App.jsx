import './App.scss'
import { useState } from "react"
import Boxes from './components/Boxes'


function App() {

  /**
       * Challenge part 1:
       * 1. Initialize state with the default value of the
       *    array pulled in from boxes.js
       * 2. Map over that state array and display each one
       *    as an empty square (black border, transparent bg color)
       *    (Don't worry about using the "on" property yet)
       */

  const [squares, setSquares] = useState(Boxes)

  const squareElements = squares.map(squares => (
    <div className='box' key={squares.id}>
    </div>
  ))

  function handleClick() {
    console.log(squares);
  }

  return (

    <main>

      {squareElements}

    </main>

  )
}

export default App
