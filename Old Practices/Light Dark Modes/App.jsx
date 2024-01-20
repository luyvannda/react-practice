import { useState } from 'react'
import './App.scss'
import Main from './components/Main'
import Navbar from './components/NavBar'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  };

  return (

    <div className="container">
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={isDarkMode} />
    </div>

  )
}
