import { PropTypes } from "prop-types"

/**
  * Challenge:
  * If the star is filled, add an aria-label of "Unmark as favorite".
  * Otherwise, use the aria-label of "Mark as favorite".
  */

export default function Star(props) {
  let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
  let buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"

  return (
    <>
      <button
        onClick={props.handleClick}
        aria-label={buttonLabel}
        aria-pressed={props.isFilled}
        className="card--favorite-button"
      >
        <img
          src={starIcon}
          alt="Star Icon."
          className="card--favorite"
        />
      </button>
    </>
  )
}

Star.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

