import { useEffect,useState } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"

const AdminDashboardTest = () => {

  const [teams,setTeams] = useState([])

  useEffect(()=>{

    const load = async()=>{

      const res = await axios.get(
        "http://localhost:3000/api/bitotsavAdmin/teams"
      )

      setTeams(res.data)

    }

    load()

  },[])

  return (

    <div className="h-screen py-100">
      <Navbar/>

      <h2>Admin Dashboard</h2>

      <table border="1">

        <thead>

          <tr>
            <th>Team</th>
            <th>Status</th>
            <th>Score</th>
          </tr>

        </thead>

        <tbody>

          {teams.map(team=>(

            <tr key={team.teamId}>

              <td>{team.teamId}</td>

              <td>
                {team.completed ? "Completed":"Waiting"}
              </td>

              <td>
                {team.score ?? "-"}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default AdminDashboardTest