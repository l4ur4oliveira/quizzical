export default function Question(props) {
  return (
    <div key={props.id} className="question1">
      <h2>{props.text}</h2>
      <div className="answers">
        <div className="answers-item">
          <input type="radio" name="question1" id="question1-a1" />
          <label htmlFor="question1-a1">First answer</label>
        </div>
        <div className="answers-item">
          <input type="radio" name="question1" id="question1-a2" />
          <label htmlFor="question1-a2">Second answer</label>
        </div>
        <div className="answers-item">
          <input type="radio" name="question1" id="question1-a3" />
          <label htmlFor="question1-a3">Third answer</label>
        </div>
        <div className="answers-item">
          <input type="radio" name="question1" id="question1-a4" />
          <label htmlFor="question1-a4">Fourth answer</label>
        </div>
      </div>
    </div>
  )
}
