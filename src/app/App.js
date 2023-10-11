import './App.scss';
import Card from "./components/Card.js"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

export default function App() {

  return (
    <div>
      <Card />
    </div>
  )


}

