import './App.scss';
import Joke from './components/Joke';
import jokesData from './components/jokesData';


/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke
      setup={joke.setup}
      punchline={joke.punchline}
    />
  })
  return (
    <div>
      {jokeElements}
    </div>
  )
}