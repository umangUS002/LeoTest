const QuestionCard = ({ question, ranking, setRanking }) => {

  const changeRank = (i, value) => {
    const newRank = [...ranking]
    newRank[i] = Number(value)
    setRanking(newRank)
  }

  return (

    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">

      {/* Question */}
      <h3 className="text-lg md:text-xl font-semibold text-text1 mb-5">
        {question.text}
      </h3>

      {/* Options */}
      <div className="space-y-4">

        {question.options.map((opt, i) => (

          <div
            key={i}
            className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition"
          >

            <span className="text-gray-200">
              {opt}
            </span>

            <select
              value={ranking[i]}
              onChange={(e) => changeRank(i, e.target.value)}
              className="bg-slate-800 text-white border border-slate-600 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
            >

              {[1, 2, 3, 4].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}

            </select>

          </div>

        ))}

      </div>

    </div>
  )
}

export default QuestionCard