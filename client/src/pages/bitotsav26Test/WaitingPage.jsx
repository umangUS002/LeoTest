import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const WaitingPage = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const { teamId } = location.state

  useEffect(() => {

    const interval = setInterval(async () => {

      const res = await axios.get(
        `http://localhost:5000/api/result/${teamId}`
      )

      if (res.data.status === "completed") {
        navigate("/result", { state: { teamId } })
      }

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="min-h-screen flex items-center justify-center hero-background px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">

        {/* Loader */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Waiting for your teammate...
        </h2>

        <p className="text-gray-300 text-sm mb-4">
          Your teammate is still completing the compatibility test.
        </p>

        <p className="text-gray-400 text-sm">
          You can leave this page. Once both teammates finish the test,
          the result will be available automatically.
        </p>

      </div>

    </div>

  )
}

export default WaitingPage