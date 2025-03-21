import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

import Question from "../components/Question";

export default function QuestionsView() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [endGame, setEndGame] = useState(false);

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
      <Question
        key={question.id}
        id={question.id}
        text={question.question}
        options={question.answers}
        setUserAnswers={setUserAnswers}
        correct={question.correct ?? null} />
    ));

    return elements;
  }

  function checkAnswers(ev) {
    ev.preventDefault();

    const newQuestions = questions.map((question) => {
      const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
      const correctAnswer = question.correct_answer;

      if (question.answers[userAnswer.optionId] === correctAnswer) {
        return { ...question, correct: true };
      } else {
        return { ...question, correct: false };
      }
    });

    setQuestions(newQuestions);
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
            {endGame
              ?
              <button className="btn-check" onClick={restartGame}>Restart</button>
              :
              <button className="btn-check" onClick={checkAnswers}>Check answers</button>
            }
          </>
        }

      </form>
    </div>
  );
}
