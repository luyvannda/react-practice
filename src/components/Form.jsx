// import { PropTypes } from "prop-types"
import { useState } from "react"

/**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */


export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
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

      <textarea
        name="comments"
        cols="30"
        rows="10"
        placeholder="Please leave your comments here"
        onChange={handleChange}
        value={formData.comments}
      />

    </form>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }