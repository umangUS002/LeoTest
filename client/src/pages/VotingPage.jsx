import React, { useEffect, useState, useContext } from "react";
import { AppContext, useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

export default function VotingPage() {
  const [contestants, setContestants] = useState([]);
  const [voted, setVoted] = useState(localStorage.getItem("hasVoted") === "true");

  const { axios } = useAppContext(AppContext);
  const { allContestants } = useContext(AppContext);

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
    <div className="min-h-screen hero-background flex flex-col items-center p-6">
      <h1 className="text-4xl pt-20 font-bold text-white mb-8 text-center">
        Mr. & Miss Pantheon - Voting Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {contestants.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={assets.Logo}
              alt={c.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
            <p className="text-gray-600 mb-4">Votes: {c.votes}</p>
            <button
              onClick={() => handleVote(c._id)}
              disabled={voted}
              className={`px-4 py-2 rounded-xl font-medium ${
                voted
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
