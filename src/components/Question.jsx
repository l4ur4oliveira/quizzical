import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {

  function selectAnswer(option) {
    props.setUserAnswers(prevAnswers => {
      const hasQuestion = prevAnswers.some(answer => answer.questionId === props.id);

      if (!hasQuestion) {
        return [
          ...prevAnswers,
          { questionId: props.id, option }
        ];
      }

      const newAnswers = prevAnswers.map(answer => {
        if (answer.questionId !== props.id) {
          return answer;
        }

        return {
          ...answer,
          option
        };
      });

      return newAnswers;
    });
  }

  function createOptionComponents(id) {

    const elements = props.options.map((option, idx) => {
      const optionId = nanoid();
      const optionValue = decode(option);

      let answerChecked = "";
      if (props.correct !== null) {
        answerChecked = props.correct ? "correct" : "wrong";
      }

      return (
        <div key={idx} className="answers-item">
          <input type="radio" name={id} id={optionId} value={optionValue} onChange={() => selectAnswer(optionValue)} />
          <label htmlFor={optionId} className={answerChecked}>
            {optionValue}
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
