import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import QuestionCard from "../../components/bitotsav26Test/QuestionCard"

const questions = [

  {
    id: 1,
    text: "Preferred Work Style",
    options: [
      "Fast execution",
      "Careful planning",
      "Collaboration",
      "Independent work"
    ]
  },

  {
    id: 2,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },

  {
    id: 3,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },
  {
    id: 4,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },
  {
    id: 5,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  }

]

const TestPageBit = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const { teamId } = location.state

  const [answers, setAnswers] = useState(
    questions.map(() => [1, 2, 3, 4])
  )

  const submit = async () => {

    const formatted = answers.map((rank, i) => ({

      questionId: questions[i].id,
      ranking: rank

    }))

    const res = await axios.post(
      '/api/bitotsavTest/submit',
      {
        teamId,
        answers: formatted
      }
    )

    if (res.data.status === "waiting")
      navigate("/waiting", { state: { teamId } })

    if (res.data.status === "completed")
      navigate("/result", { state: { teamId } })

  }

  return (

    <div className="min-h-screen hero-background flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-5">
          Set the priority of the options!
        </h2>

        <div className="overflow-y-auto max-h-[80vh] pr-2 space-y-6">
          {questions.map((q, i) => (
            <QuestionCard
              key={i}
              question={q}
              ranking={answers[i]}
              setRanking={(r) => {
                const newAns = [...answers];
                newAns[i] = r;
                setAnswers(newAns);
              }}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={submit}
            className="px-8 cursor-pointer py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition duration-300 shadow-lg"
          >
            Submit Test
          </button>
        </div>

      </div>

    </div>
  )
}

export default TestPageBit