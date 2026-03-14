import { useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar"

const ResultPage = () => {

  const location = useLocation()
  const { teamId } = location.state

  return (

    <div className="min-h-screen hero-background">

      <Navbar />

      <div className="flex items-center justify-center px-4 py-40">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">

          <h1 className="text-3xl font-bold text-white mb-4">
            Thank You for Completing the Test!
          </h1>

          <p className="text-gray-300 mb-6">
            Your responses have been successfully submitted.
          </p>

          {/* Team Info */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">

            <p className="text-gray-400 text-sm">
              Team ID
            </p>

            <p className="text-lg font-semibold text-white">
              {teamId}
            </p>

          </div>

          {/* Event Details */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">

            <p className="text-gray-400 text-sm">
              Event
            </p>

            <p className="text-lg font-semibold text-text1">
              How I met your __ ?
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Bitotsav 2026
            </p>

          </div>

          <p className="text-gray-400 text-sm">
            You may now leave this page.
          </p>

        </div>

      </div>

    </div>

  )
}

export default ResultPage