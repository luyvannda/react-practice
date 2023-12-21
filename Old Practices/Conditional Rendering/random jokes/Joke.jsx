import { PropTypes } from "prop-types"
import { useState } from "react"

export default function Joke(props) {
  /**
    * Challenge:
    * - Only display the punchline paragraph if `isShown` is true
    */

  const [isShown, setIsShown] = useState(false);

  function toggle() {

    setIsShown(prevShown => !prevShown)
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}

      <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>
      <hr />
    </div>
  )
}

Joke.propTypes = {
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired
}