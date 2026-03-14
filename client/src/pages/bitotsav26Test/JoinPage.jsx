import { useState } from "react"
import { useNavigate } from "react-router-dom"

const JoinPage = () => {

  const [teamId, setTeamId] = useState("")
  const navigate = useNavigate()

  const startTest = () => {

    if (!teamId) return

    navigate("/test", {
      state: { teamId }
    })
  }

  return (

    <div className="min-h-screen flex items-center justify-center hero-background px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center">

        <div className="flex-column">
          <h1 className="text-4xl font-bold text-text1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF0] via-[#3ABEFF] to-[#5F85FF]">How I met your __ ?</h1>
          <h2 className="text-2xl font-bold text-white mb-0">
            Team Compatibility Test
          </h2>
          <p className="mb-6">(Round 1)</p>
        </div>

        <input
          placeholder="Enter Team ID"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />

        <button
          onClick={startTest}
          className="cursor-pointer mt-6 w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition duration-300 shadow-lg"
        >
          Start Test
        </button>

      </div>

    </div>
  )
}

export default JoinPage