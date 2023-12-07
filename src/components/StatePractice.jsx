export default function StatePractice() {

  /*
  Challenge: complete the function below
  Given a name, return "Good <timeOfDay>, <name>!" depending
  on the current time of day.
  
  4 am - 11:59 am, timeOfDay = "morning"
  12 pm - 4:59 pm: timeOfDay = "afternoon"
  5 pm - 7:59 pm: timeOfDay = "evening"
  8 pm - 3:59 am: timeOfDay = "night"
  
  E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"
  
  Hint: you can get the current time of day by using: 
  
  const date = new Date()
  const hours = date.getHours()
  */

  function greeting(name) {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timeOfDay;

    return `Good ${timeOfDay}, ${name}`

  }

  return (
    <>
      <h4>StatePractice</h4>
      <button onClick={greeting("bob")}>Greeting!!!</button>
    </>
  )
}