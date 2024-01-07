import './App.scss'
import WindowTracker from './components/WindowTracker'
import { useState } from "react"


export default function App() {

  const [show, setShow] = useState(true);

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  return (
    <div className="container">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  )
}
