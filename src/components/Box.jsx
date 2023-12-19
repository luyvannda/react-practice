import { PropTypes } from "prop-types"


export default function Box(props) {

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent"
  }

  return (
    <>
      <button
        onClick={() => props.handleClick(props.id)}
        style={styles}
        className='box' >
      </button>
    </>
  )
}

Box.propTypes = {
  on: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}
