import { useState, useEffect } from "react"

export default function WindowTracker() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {

    function watchWidth() {
      console.log("Setting")
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)

    return function () {
      console.log("Cleaning up")
      window.removeEventListener("resize", watchWidth)
    }

  }, [])

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}


// Form.propTypes = {
//   setup: PropTypes.string.isRequired,
//   punchline: PropTypes.string.isRequired
// }