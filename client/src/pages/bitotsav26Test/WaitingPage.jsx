import { useEffect } from "react"
import { useLocation,useNavigate } from "react-router-dom"
import axios from "axios"

const WaitingPage = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const {teamId} = location.state

  useEffect(()=>{

    const interval = setInterval(async()=>{

      const res = await axios.get(
        `http://localhost:5000/api/result/${teamId}`
      )

      if(res.data.status === "completed"){

        navigate("/result",{state:{teamId}})

      }

    },3000)

    return ()=>clearInterval(interval)

  },[])

  return(

    <div className="h-screen py-100" style={{textAlign:"center"}}>

      <h2>Waiting for your teammate...</h2>

    </div>

  )
}

export default WaitingPage