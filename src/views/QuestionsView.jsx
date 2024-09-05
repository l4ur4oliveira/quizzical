import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import Question from "../components/Question";

export default function QuestionsView() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    async function startFetch() {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await response.json();

      const newQuestions = data.results.map(result => {
        return {
          id: nanoid(),
          question: decode(result.question),
          correct_answer: result.correct_answer,
          answers: shuffleOptions([result.correct_answer, ...result.incorrect_answers])
        };
      });

      setQuestions(newQuestions);
    }

    startFetch();
  }, []);

  function shuffleOptions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function createQuestionComponents() {
    const elements = questions.map(question => (
      <Question key={question.id} id={question.id} text={question.question} options={question.answers} selectAnswer={(optionId) => selectAnswer(optionId, question.id)} />
    ));

    return elements;
  }

  function selectAnswer(optionId, questionId) {
    setUserAnswers(prevAnswers => {
      const hasQuestion = prevAnswers.some(answer => answer.questionId === questionId);

      if (!hasQuestion) {
        return [
          ...prevAnswers,
          { questionId, optionId }
        ];
      }

      const newArray = prevAnswers.map(answer => {
        if (answer.questionId !== questionId) {
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

  return (
    <div className="wrapper">
      <form className="quizz">

        {questions.length === 0
          ?
          <p className="loading">Loading</p>
          :
          <>
            {createQuestionComponents()}
            <button className="btn-check">Check answers</button>
          </>
        }

      </form>
    </div>
  );
}
