import './App.scss'
import { useState } from "react"
import Boxes from './components/Boxes'
import Box from './components/Box'


function App() {

  // eslint-disable-next-line no-unused-vars
  const [squares, setSquares] = useState(Boxes)

  const squareElements = squares.map(squares => (
    <Box key={squares.id} on={squares.on} />

  ))

  return (

    <main>
      {squareElements}
    </main>

  )
}


export default App
