import { useState, useEffect } from "react"
import { nanoid } from "nanoid"

import Question from "../components/Question"

export default function QuestionsView() {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [questionElements, setQuestionElements] = useState([])

  useEffect(() => {
    async function startFetch() {
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await response.json()

      const newQuestions = data.results.map(result => {
        return {
          id: nanoid(),
          question: result.question,
          answers: [result.correct_answer, ...result.incorrect_answers]
        }
      })

      setQuestions(newQuestions)
    }

    startFetch()
  }, [])

  useEffect(() => {
    if (questions.length > 0) {
      const elements = questions.map(question => (
        <Question key={question.id} text={question.question} />
      ))

      setQuestionElements(elements)
      setIsLoading(false)
    }
  }, [questions])

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
