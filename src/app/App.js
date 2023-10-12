import './App.scss';
import Joke from './components/Joke';

/* Challenge:
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.

EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/


export default function App() {

  return (
    <div className='app'>
      <Joke />
      <Joke />
      <Joke />
      <Joke />
    </div>
  )
}

