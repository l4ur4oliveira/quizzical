import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import { decode } from "html-entities"

import Question from "../components/Question"

export default function QuestionsView() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function startFetch() {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await response.json()

      const newQuestions = data.results.map(result => {
        return {
          id: nanoid(),
          question: decode(result.question),
          answers: [result.correct_answer, ...result.incorrect_answers]
        }
      })

      setQuestions(newQuestions)
    }

    startFetch()
  }, [])

  function createQuestionComponents() {
    const elements = questions.map(question => (
      <Question key={question.id} text={question.question} />
    ))

    return elements
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
  )
}
