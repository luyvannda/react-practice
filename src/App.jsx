import './App.scss'
// import Form from './components/Form'
import { useState, useEffect } from "react"

export default function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0);

  console.log("Component Rendered")

  useEffect(function () {

    console.log("Run Effect")
    // fetch("https://swapi.dev/api/people/1")
    //   .then(res => res.json())
    //   .then(data => setStarWarsData(data))

  }, [count])


  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button className='btn btn-primary' onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}
