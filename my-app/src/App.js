import logo from './logo.svg';
import './App.scss';

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
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

export function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React.</li>
      </ol>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <p>© 2023 Luy Vannda development. All rights reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
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