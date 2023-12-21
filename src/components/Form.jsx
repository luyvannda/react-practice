// import { PropTypes } from "prop-types"
import { useState } from "react"


export default function Form() {
  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": ""
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
      />

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />

    </form>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }