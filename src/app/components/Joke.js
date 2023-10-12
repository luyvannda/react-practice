export default function Joke(props) {
  return (
    <div className="joke">
      <p className="setup">Setup: <span>{props.setup}</span></p>
      <p className="punchline">Punchline: <span>{props.punchline}</span></p>
    </div>
  )
}