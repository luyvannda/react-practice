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
    comments: "",
    isFriendly: true
  })

  console.log(formData)

  function handleChange(event) {

    const { name, value, type, checked } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
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

      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>

    </form>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }