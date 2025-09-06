import React, { useEffect, useState, useContext } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function VotingPage() {
  const [contestants, setContestants] = useState([]);
  const [voted, setVoted] = useState(localStorage.getItem("hasVoted") === "true");

  const { axios } = useAppContext(AppContext);
  const { allContestants } = useContext(AppContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    setContestants(allContestants);
  }, [allContestants]);

  const handleVote = async (id) => {
    if (voted) return;

    try {
      const res = await axios.post(`/api/contestants/vote/${id}`)

      setContestants(contestants.map(c => c._id === id ? res.data.contestant : c));
      toast.success("Thanks for Voting")
      setVoted(true);
      localStorage.setItem("hasVoted", "true");
    } catch (err) {
      alert(err.response?.data?.message || "Voting failed");
    }
  };

  return (
    <div className="min-h-screen hero-background flex flex-col items-center p-6 pt-15 pb-40">
      <h1 className="text-5xl max-sm:text-4xl pt-20 font-bold text-white mb-15 text-center">
        Mr. & Miss Pantheon 2025
      </h1>
      <button onClick={() => navigate('/votingResults')} className="w-80 h-15 mb-15 cursor-pointer max-sm:mt-3 mt-2 bg-green-500/10 text-green-600 font-semibold px-4 py-2 rounded-lg border border-green-500/20 text-center">
        Voting Results
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {contestants.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-600 mb-4">Votes: {c.votes}</p>
            <button
              onClick={() => handleVote(c._id)}
              disabled={voted}
              className={`px-4 py-2 rounded-xl font-medium ${voted
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
            >
              {voted ? "Already Voted" : "Vote"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
