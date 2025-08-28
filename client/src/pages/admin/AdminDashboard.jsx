import React, { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { AppContext, useAppContext } from "../../context/AppContext";

export default function AdminDashboard() {
  const {contestantResults} = useAppContext(AppContext);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/contestants/results")
  //     .then(res => setContestants(res.data.content || []))
  //     .catch(err => console.error(err));
  // }, []);

  // Colors for pie slices
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560"];

  return (
    <div className="min-h-screen hero-background p-6 pt-30">
      <h1 className="text-7xl font-bold text-center mb-6">Voting Results</h1>

      {/* Table (optional, keep for details) */}
      <div className="max-w-3xl mx-auto bg-white/10 shadow rounded-xl p-6 mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Contestant</th>
              <th className="py-2 text-center">Votes</th>
            </tr>
          </thead>
          <tbody>
            {contestantResults.map((c) => (
              <tr key={c._id} className="border-b">
                <td className="py-2 flex items-center space-x-3">
                  <img src={assets.leologo} alt={c.name} className="w-10 h-10 rounded-full" />
                  <span>{c.name}</span>
                </td>
                <td className="py-2 text-center font-semibold">{c.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="max-w-4xl mx-auto bg-white/10 shadow rounded-xl p-6 mb-20">
        <h2 className="text-xl font-semibold mb-4 text-center">Votes by Contestant</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={contestantResults} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="votes" fill="#3ABEFF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
