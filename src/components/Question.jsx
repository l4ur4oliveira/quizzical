import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {

  function createOptionComponents(id) {

    const elements = props.options.map((option, idx) => {
      const optionId = nanoid();

      return (
        <div key={idx} className="answers-item">
          <input type="radio" name={id} id={optionId} value={decode(option)} onChange={() => props.selectAnswer(idx)} />
          <label htmlFor={optionId}>{decode(option)}</label>
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
