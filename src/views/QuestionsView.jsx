import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import Question from "../components/Question";

export default function QuestionsView() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    async function startFetch() {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await response.json();

      const newQuestions = data.results.map(result => {
        return {
          id: nanoid(),
          question: decode(result.question),
          correct_answer: result.correct_answer,
          options: shuffleOptions([result.correct_answer, ...result.incorrect_answers])
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
      <Question
        key={question.id}
        id={question.id}
        text={question.question}
        options={question.options}
        setUserAnswers={setUserAnswers}
        correct={question.correct ?? null}
        endGame={endGame} />
    ));

    return elements;
  }

  function checkAnswers(ev) {
    ev.preventDefault();

    const checkedQuestions = questions.map((question) => {
      const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
      const correctAnswer = question.correct_answer;

      if (userAnswer.option === correctAnswer) {
        setCorrectAnswers((prevCount) => prevCount += 1);
        return { ...question, correct: true };
      } else {
        return { ...question, correct: false };
      }
    });

    setQuestions(checkedQuestions);
    setEndGame(true);
  }

  function restartGame() {
    const form = document.querySelector("form");
    form.reset();

    window.location.reload();
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
            <div className="end-game">
              {endGame
                ?
                <>
                  <p>You scored {correctAnswers}/5 correct answers</p>
                  <button className="btn-check" onClick={restartGame}>Restart</button>
                </>
                :
                <button className="btn-check" onClick={checkAnswers}>Check answers</button>
              }
            </div>
          </>
        }

      </form>
    </div>
  );
}
