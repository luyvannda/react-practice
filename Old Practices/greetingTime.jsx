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
  
  */

  function greeting(name) {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours >= 4 && hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return console.log(`Good ${timeOfDay}, ${name}`)

  }

  return (
    <>
      <h4>StatePractice</h4>
      <button onClick={() => greeting("Joe")}>Greeting!!!</button>
    </>
  )
}