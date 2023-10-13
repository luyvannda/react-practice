import './App.scss';
import Joke from '../../src/app/components/Joke';

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

export default function App() {

  return (
    <div className='app'>
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvotes={5}
        downvotes={2}
        comments={["That's a great joke!!!"]}
        isPun={true}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvotes={2}
        downvotes={5}
        comments={["That's joke suck!!!"]}
        isPun={false}
      />
      <Joke
        punchline="I’m reading a book on anti-gravity. It’s impossible to put down!"
        upvotes={6}
        downvotes={2}
        comments={["I laugh till drop with this one"]}
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upvotes={4}
        downvotes={4}
        comments={["It is funny, isn't it?"]}
        isPun={true}
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
        upvotes={7}
        downvotes={1}
        comments={["Not sure if it is a joke at all!!!"]}
        isPun={true}
      />
    </div>
  )
}

