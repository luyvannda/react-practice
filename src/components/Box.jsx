import { PropTypes } from "prop-types"
import { useState } from "react"

/**
    * Challenge: Create state controlling whether
    * this box is "on" or "off". Use the incoming
    * `props.on` to determine the initial state.
    * 
    * Create an event listener so when the box is clicked,
    * it toggles from "on" to "off".
    * 
    * Goal: clicking each box should toggle it on and off.
    */


export default function Box(props) {

  const [control, setControl] = useState(props.on)

  function handleClick() {

    setControl(prevControl => (prevControl ? false : true))
  }

  const styles = {
    backgroundColor: control ? "#222222" : "transparent"
  }

  return (
    <>
      <button onClick={handleClick} style={styles} className='box' >
      </button>
    </>
  )
}

Box.propTypes = {
  on: PropTypes.bool.isRequired
}
