import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [contestants, setContestants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contestants/results")
      .then(res => setContestants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📊 Voting Results</h1>
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Contestant</th>
              <th className="py-2 text-center">Votes</th>
            </tr>
          </thead>
          <tbody>
            {contestants.map((c, i) => (
              <tr key={c._id} className="border-b">
                <td className="py-2 flex items-center space-x-3">
                  <img src={c.image} alt={c.name} className="w-10 h-10 rounded-full" />
                  <span>{c.name}</span>
                </td>
                <td className="py-2 text-center font-semibold">{c.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
