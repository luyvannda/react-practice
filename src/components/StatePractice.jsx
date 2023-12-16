import { useState } from "react"

/**
 * Challenge: Use a ternary to determine which star image filename
 * should be used based on the `contact.isFavorite` property
 * 
 * `true` => "star-filled.png"
 * `false` => "star-empty.png"
 * 
 * Then use the starIcon value to display the correct image
 */

export default function StatePractice() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite() {

    setContact(prevState => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite
      }
    })
  }

  return (
    <main>
      <article className="card">
        <img src="./public/user.png" className="card--image" />
        <div className="card--info">
          <img
            src={`./public/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {`${contact.firstName} ${contact.lastName}`}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}
