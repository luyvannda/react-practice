import './App.scss'
// import { useState } from "react"
import jokesData from './components/JokesData'
import Joke from './components/Joke'


export default function App() {
  const jokeElements = jokesData.map(joke => {
    return (
      <Joke
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })
  return (
    <div>
      {jokeElements}
    </div>
  )
}
