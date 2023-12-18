import { PropTypes } from "prop-types"

export default function Star(props) {

  return (
    <>

      <img
        src={props.isFilled}
        className="card--favorite"
      // onClick={toggleFavorite}
      />

    </>
  )
}

Star.propTypes = {
  isFilled: PropTypes.string.isRequired
}
