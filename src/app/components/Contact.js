import whiskerson from "./images/mr-whiskerson.png"
import phone from "./images/phone-icon.png"
import email from "./images/mail-icon.png"

export default function Contact() {
  return (

    <div className="contacts">

      <div className="contact-card">
        <img src={whiskerson} alt="a cat name whiskerson" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={email} alt="email icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  )
}