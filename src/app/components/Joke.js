export default function Joke(props) {
  return (
    <div className="joke">
      {
        props.setup ?
          (<p className="setup">Setup: <span>{props.setup}</span></p>)
          : null
      }
      <p className="punchline">Punchline: <span>{props.punchline}</span></p>
      <hr />
    </div>
  )
}


//  <p>Upvotes: <span>{props.upvotes}</span></p>
//       <p>Downvotes: <span>{props.downvotes}</span></p>
//       <p>Comments: <span>{props.comments}</span></p>
//       <p>Is pun: <span>{props.isPun.toString()}</span></p>