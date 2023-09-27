import logo from './logo.svg';
import './App.scss';

/**
Mini Challenge:
Move the `header` element from App into 
its own component called "Header"
*/

export function Header() {
  return (
    <header>
      <nav>
        <img className='app-logo' src={logo} alt="My App logo"></img>
      </nav>
    </header>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React.</li>
      </ol>
      <footer>
        <p>© 2023 Luy Vannda development. All rights reserved.</p>
      </footer>
    </div>
  )
}






/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/