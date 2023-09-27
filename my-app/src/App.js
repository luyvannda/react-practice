import './App.scss';
import Header from './Header'
import MainContent from './MainContent';
import Footer from './Footer';


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