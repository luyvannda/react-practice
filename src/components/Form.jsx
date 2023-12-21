// import { PropTypes } from "prop-types"
import { useState } from "react"

/**
     * Challenge: add an email field/state to the form
     */


export default function Form() {
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": "",
    "email": ""
  })

  console.log(formData)

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />

      <input
        type="email"
        name="email"
        placeholder="example@youremail.com"
        onChange={handleChange}
        value={formData.email}
      />

    </form>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }