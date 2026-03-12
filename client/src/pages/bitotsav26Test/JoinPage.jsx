import { useState } from "react"
import { useNavigate } from "react-router-dom"

const JoinPage = () => {

  const [teamId,setTeamId] = useState("")
  const navigate = useNavigate()

  const startTest = () => {

    if(!teamId) return

    navigate("/test",{
      state:{teamId}
    })
  }

  return (

    <div className="py-100 h-screen" style={{textAlign:"center"}}>

      <h2>Team Compatibility Test</h2>

      <input
        placeholder="Enter Team ID"
        value={teamId}
        onChange={(e)=>setTeamId(e.target.value)}
      />

      <br/><br/>

      <button onClick={startTest}>
        Start Test
      </button>

    </div>
  )
}

export default JoinPage