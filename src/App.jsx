import './App.scss'
import Body from './components/Body';
import Header from './components/Header';
import { useState } from "react"

function App() {


  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */


  const [user, setUser] = useState("Joe")

  return (
    <div>
      <Header userName={user} />
      <Body userName={user} />
    </div>
  )
}

export default App
