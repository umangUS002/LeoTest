import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Navbar from "../../components/Navbar"

const ResultPage = () => {

  const location = useLocation()
  const { teamId } = location.state

  const [score, setScore] = useState(null)

  useEffect(() => {

    const load = async () => {

      const res = await axios.get(
        `http://localhost:3000/api/bitotsavTest/result/${teamId}`
      )

      setScore(res.data.score)
    }

    load()

  }, [])

  return (

    <div className="h-screen py-100" style={{textAlign:"center"}}>
      <Navbar/>
      <h1>Compatibility Result</h1>

      <h2>{score}%</h2>

      {score >= 85 && <p>Excellent synergy</p>}
      {score >= 70 && score < 85 && <p>Strong match</p>}
      {score < 70 && <p>Moderate compatibility</p>}

    </div>
  )
}

export default ResultPage