// import { PropTypes } from "prop-types"
import { useState } from "react"

/**
    * Challenge: Track the applicant's last name as well
    */

export default function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  console.log(`firstName is ${firstName}`)
  console.log(`lastName is ${lastName}`)

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }


  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastNameChange}
      />

    </form>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }