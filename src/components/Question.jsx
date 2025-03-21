import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {

  function selectAnswer(optionId) {
    props.setUserAnswers(prevAnswers => {
      const hasQuestion = prevAnswers.some(answer => answer.questionId === props.id);

      if (!hasQuestion) {
        return [
          ...prevAnswers,
          { questionId: props.id, optionId }
        ];
      }

      const newArray = prevAnswers.map(answer => {
        if (answer.questionId !== props.id) {
          return answer;
        }

        return {
          ...answer,
          optionId
        };
      });

      return newArray;
    });
  }

  function createOptionComponents(id) {

    const elements = props.options.map((option, idx) => {
      const optionId = nanoid();

      let answerChecked = "";
      if (props.correct !== null) {
        answerChecked = props.correct ? "correct" : "wrong";
      }

      return (
        <div key={idx} className="answers-item">
          <input type="radio" name={id} id={optionId} value={decode(option)} onChange={() => selectAnswer(idx)} />
          <label htmlFor={optionId} className={answerChecked}>
            {decode(option)}
          </label>
        </div>
      );
    });

    return elements;
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div className="answers">
        {createOptionComponents(props.id)}
      </div>
    </div>
  );
}
