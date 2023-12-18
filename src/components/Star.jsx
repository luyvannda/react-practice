import { PropTypes } from "prop-types"

export default function Star(props) {
  let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    <>

      <img
        src={starIcon}
        className="card--favorite"
        onClick={props.handleClick}
      />

    </>
  )
}

Star.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

