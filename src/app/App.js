import './App.scss';


export default function App() {

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  /**
   * Challenge: fix the h1 below to use the timeOfDay
   * string we determined in the code above
   */

  return (
    <h1>Good {timeOfDay}!</h1>
  )


}

