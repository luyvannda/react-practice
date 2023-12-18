import { PropTypes } from "prop-types"


export default function Body(props) {

  return (
    <>
      <section>
        <h1>Welcome back, {props.userName}!</h1>
      </section>

    </>
  )
}

Body.propTypes = {
  userName: PropTypes.string.isRequired
}

