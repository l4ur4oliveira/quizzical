import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Question from "../components/Question"

export default function QuestionsView() {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [questionElements, setQuestionElements] = useState([])

  useEffect(() => {
    if (questions.length === 0) {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(response => response.json())
        .then(data => {
          const newQuestions = data.results.map(result => {
            return {
              id: nanoid(),
              question: result.question,
              answers: [result.correct_answer, ...result.incorrect_answers]
            }
          })

          setQuestions(newQuestions)
        })
    }
  }, [])

  useEffect(() => {
    if (questions.length > 0) {
      setIsLoading(!isLoading)
      setQuestionElements(newQuestionElements())
    }
  }, [questions])

  function newQuestionElements() {
    const elements = questions.map(question => (
      <Question key={question.id} text={question.question} />
    ))

    return elements
  }

  return (
    <div className="wrapper">
      <form className="quizz">

        {isLoading
          ?
          <p className="loading">Loading</p>
          :
          <>
            {questionElements}
            <button className="btn-check">Check answers</button>
          </>
        }

      </form>
    </div>
  )
}
