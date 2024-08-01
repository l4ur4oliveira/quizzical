export default function QuestionsView() {
  return (
    <div className="wrapper">
      <form className="quizz">
        <div className="question1">
          <h2>Is this the first question?</h2>
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

        <div className="question2">
          <h2>Is this the second question?</h2>
          <div className="answers">
            <div className="answers-item">
              <input type="radio" name="question2" id="question2-a1" />
              <label htmlFor="question2-a1">First answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question2" id="question2-a2" />
              <label htmlFor="question2-a2">Second answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question2" id="question2-a3" />
              <label htmlFor="question2-a3">Third answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question2" id="question2-a4" />
              <label htmlFor="question2-a4">Fourth answer</label>
            </div>
          </div>
        </div>

        <div className="question3">
          <h2>Is this the third question?</h2>
          <div className="answers">
            <div className="answers-item">
              <input type="radio" name="question3" id="question3-a1" />
              <label htmlFor="question3-a1">First answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question3" id="question3-a2" />
              <label htmlFor="question3-a2">Second answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question3" id="question3-a3" />
              <label htmlFor="question3-a3">Third answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question3" id="question3-a4" />
              <label htmlFor="question3-a4">Fourth answer</label>
            </div>
          </div>
        </div>

        <div className="question4">
          <h2>Is this the fourth question?</h2>
          <div className="answers">
            <div className="answers-item">
              <input type="radio" name="question4" id="question4-a1" />
              <label htmlFor="question4-a1">First answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question4" id="question4-a2" />
              <label htmlFor="question4-a2">Second answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question4" id="question4-a3" />
              <label htmlFor="question4-a3">Third answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question4" id="question4-a4" />
              <label htmlFor="question4-a4">Fourth answer</label>
            </div>
          </div>
        </div>

        <div className="question5">
          <h2>Is this the fifth question?</h2>
          <div className="answers">
            <div className="answers-item">
              <input type="radio" name="question5" id="question5-a1" />
              <label htmlFor="question5-a1">First answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question5" id="question5-a2" />
              <label htmlFor="question5-a2">Second answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question5" id="question5-a3" />
              <label htmlFor="question5-a3">Third answer</label>
            </div>
            <div className="answers-item">
              <input type="radio" name="question5" id="question5-a4" />
              <label htmlFor="question5-a4">Fourth answer</label>
            </div>
          </div>
        </div>

        <button className="btn-check">Check answers</button>
      </form>
    </div>
  )
}
