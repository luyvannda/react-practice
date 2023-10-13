export default function Joke(props) {
  return (
    <div className="joke">
      {
        props.setup ?
          (<p className="setup">Setup: <span>{props.setup}</span></p>)
          : null
      }
      <p className="punchline">Punchline: <span>{props.punchline}</span></p>
    </div>
  )
}