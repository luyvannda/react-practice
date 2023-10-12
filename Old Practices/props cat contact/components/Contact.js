import phone from "./images/phone-icon.png"
import email from "./images/mail-icon.png"

export default function Contact(props) {
  return (

    <div className="contacts">

      <div className="contact-card">
        <img src={props.img} alt={props.alt} />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src={email} alt="email icon" />
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  )
}