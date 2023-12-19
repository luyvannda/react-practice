import { PropTypes } from "prop-types"


export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      <p>{props.punchline}</p>

      <hr />
    </div>
  )
}

Joke.propTypes = {
  setup: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired
}