import { PropTypes } from "prop-types"

export default function Box(props) {

  const styles = {
    backgroundColor: props.on ? "#222222" : "none"
  }

  return (
    <>
      <div style={styles} className='box' >
      </div>
    </>
  )
}

Box.propTypes = {
  on: PropTypes.bool.isRequired
}
