import { PropTypes } from "prop-types"

export default function Header(props) {

  return (
    <>
      <header>
        <p>Current user: {props.userName}</p>
      </header>
    </>
  )
}

Header.propTypes = {
  userName: PropTypes.string.isRequired
}
