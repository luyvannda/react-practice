import './App.scss'
import WindowTracker from './components/WindowTracker'
import { useState } from "react"


export default function App() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [show, setShow] = useState(true);

  function toggle() {
    setShow(prevShow => !prevShow)
  }
  console.log(show)

  return (
    <div className="container">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker />}
    </div>
  )
}
