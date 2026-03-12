import { useLocation,useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import QuestionCard from "../../components/bitotsav26Test/QuestionCard"

const questions = [

  {
    id:1,
    text:"Preferred Work Style",
    options:[
      "Fast execution",
      "Careful planning",
      "Collaboration",
      "Independent work"
    ]
  },

  {
    id:2,
    text:"Decision Making",
    options:[
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

  const {teamId} = location.state

  const [answers,setAnswers] = useState(
    questions.map(()=>[1,2,3,4])
  )

  const submit = async () => {

    const formatted = answers.map((rank,i)=>({

      questionId:questions[i].id,
      ranking:rank

    }))

    const res = await axios.post(
      "http://localhost:3000/api/bitotsavTest/submit",
      {
        teamId,
        answers:formatted
      }
    )

    if(res.data.status === "waiting")
      navigate("/waiting",{state:{teamId}})

    if(res.data.status === "completed")
      navigate("/result",{state:{teamId}})

  }

  return (

    <div>

      <h2>Answer the questions</h2>

      {questions.map((q,i)=>(

        <QuestionCard
          key={i}
          question={q}
          ranking={answers[i]}
          setRanking={(r)=>{

            const newAns = [...answers]
            newAns[i] = r

            setAnswers(newAns)

          }}
        />

      ))}

      <button onClick={submit}>
        Submit Test
      </button>

    </div>
  )
}

export default TestPageBit