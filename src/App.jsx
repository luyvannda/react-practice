import './App.scss'
// import Form from './components/Form'
import { useState, useEffect } from "react"

/**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */


export default function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1);

  useEffect(() => {

    console.log("Run Effect")

    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))

  }, [count])


  return (
    <div>
      <h2>The count is {count}</h2>
      <button className='btn btn-primary' onClick={() => setCount(prevCount => prevCount + 1)}>Get next character!</button>

      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

    </div>
  )
}
