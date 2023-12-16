import { useState } from "react"

export default function StatePractice() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    console.log("Toggle Favorite")
  }

  return (
    <main>
      <article className="card">
        <img src="./public/user.png" className="card--image" />
        <div className="card--info">
          <img
            src="./public/star-empty.png"
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            Joe Joe
          </h2>
          <p className="card--contact">+1 (719) 555-1212</p>
          <p className="card--contact">itsmyrealname@example.com</p>
        </div>

      </article>
    </main>
  )
}
