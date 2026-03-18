import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../../components/Navbar"

const AdminDashboardTest = () => {

  const [teams, setTeams] = useState([])
  const [totalTeams, setTotalTeams] = useState(0)
  const [waitingT, setWaitingT] = useState(0)
  const [completedT, setCompletedT] = useState(0)

  useEffect(() => {

    const load = async () => {

      const res = await axios.get('/api/bitotsavAdmin/teams')

      setTeams(res.data)

    }

    load()

  }, [])

  useEffect(() => {

    const load = async () => {

      const res = await axios.get(
        '/api/bitotsavAdmin/stats'
      )

      setTotalTeams(res.data.totalTeams)
      setCompletedT(res.data.completed)
      setWaitingT(res.data.waiting)

    }

    load()

  }, [])

  return (

    <div className="min-h-screen bg-primary">

      <Navbar />

      <div className="px-6 py-10 flex justify-center">

        <div className="w-full max-w-6xl bg-white/8 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 max-sm:p-4">

          {/* Title */}
          <h2 className="text-3xl font-bold text-text1 text-center mb-8">
            How I Met Your ___?
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm">Total Teams</p>
              <p className="text-3xl font-bold text-white mt-2">{totalTeams}</p>
            </div>

            <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6 text-center">
              <p className="text-green-300 text-sm">Completed</p>
              <p className="text-3xl font-bold text-green-400 mt-2">{completedT}</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 text-center">
              <p className="text-yellow-300 text-sm">Waiting</p>
              <p className="text-3xl font-bold text-yellow-400 mt-2">{waitingT}</p>
            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto text-center max-h-[60vh] overflow-y-auto rounded-xl border border-white/10">

            <table className="w-full text-left">

              <thead className="sticky top-0 bg-slate-900">

                <tr className="text-gray-300 text-center">

                  <th className="py-3 px-4">Team ID</th>
                  <th className="py-3 px-4">Team Name</th>                 
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Score</th>

                </tr>

              </thead>

              <tbody>

                {teams.map((team) => (

                  <tr
                    key={team.teamId}
                    className="border-b text-center border-white/10 hover:bg-white/5 transition"
                  >

                    <td className="py-3 px-4 text-white font-medium">
                      {team.teamId}
                    </td>

                    <td className="py-3 px-4 text-white font-medium">
                      {team.teamName}
                    </td>

                    <td className="py-3 px-4">

                      {team.completed ? (
                        <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-400/30">
                          Completed
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/30">
                          Waiting
                        </span>
                      )}

                    </td>

                    <td className="py-3 px-4 text-gray-200">
                      {team.score ?? "-"}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  )
}

export default AdminDashboardTest