import './App.scss'
import { useState } from "react"
import Boxes from './components/Boxes'
import { PropTypes } from "prop-types"


function App(props) {

  const [squares, setSquares] = useState(Boxes)

  // Challenge: use a ternary to determine the backgroundColor.
  // If darkMode is true, set it to "#222222"
  // If darkMode is false, set it to "#cccccc"

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }


  const squareElements = squares.map(squares => (
    <div style={styles} className='box' key={squares.id}>
    </div>
  ))

  return (

    <main>
      {squareElements}
    </main>

  )
}

App.propTypes = {
  darkMode: PropTypes.bool.isRequired
}

export default App
