import './App.scss'
import { useState } from "react"
import Boxes from './components/Boxes'
import Box from './components/Box'


function App() {

  /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */

  // eslint-disable-next-line no-unused-vars
  const [squares, setSquares] = useState(Boxes)

  function toggle(id) {

    setSquares(prevState => {
      return prevState.map(square => {
        if (square.id === id) {
          return {
            ...square,
            on: !square.on
          }
        }
        return square
      })
    })
  }

  const squareElements = squares.map(squares => (
    <Box
      key={squares.id}
      id={squares.id}
      on={squares.on}
      handleClick={toggle} />
  ))

  return (

    <main>
      {squareElements}
    </main>

  )
}


export default App
