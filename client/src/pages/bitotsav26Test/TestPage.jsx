import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import QuestionCard from "../../components/bitotsav26Test/QuestionCard"
import { questions } from "../../assets/assets"
import { toast } from "react-hot-toast";

const TestPageBit = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const { teamId, teamName } = location.state

  const [answers, setAnswers] = useState(
    questions.map(() => [1, 2, 3, 4])
  )

  const submit = async () => {

    // 🔥 Step 1: Validate duplicates BEFORE API call
    for (let i = 0; i < answers.length; i++) {
      const ranking = answers[i];
      const set = new Set(ranking);

      if (set.size !== ranking.length) {
        toast.error(`Duplicate ranking in Question ${i + 1}`);
        return;
      }
    }

    try {
      const formatted = answers.map((rank, i) => ({
        questionId: questions[i].id,
        ranking: rank
      }));

      const res = await axios.post(
        '/api/bitotsavTest/submit',
        {
          teamId,
          teamName,
          answers: formatted
        }
      );

      if (res.data.status === "waiting")
        navigate("/waiting", { state: { teamId, teamName } });

      if (res.data.status === "completed")
        navigate("/result", { state: { teamId, teamName } });

    } catch (err) {   // ✅ FIXED (was error)

      console.log(err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";

      toast.error(message);
    }
  };
  return (

    <div className="min-h-screen hero-background flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-3xl mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">

        <div className="flex-col text-center gap-2">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Set the priority of the options!
          </h2>
          <p className="mb-5 text-white">Set the priority from 1 (highest) to 4 (lowest). Each number can be used only once.</p>
        </div>

        <div className="overflow-y-auto max-h-[80vh] pr-2 space-y-6">
          {questions.map((q, i) => (
            <QuestionCard
              key={i}
              question={q}
              ranking={answers[i]}
              setRanking={(r) => {
                const newAns = [...answers];
                newAns[i] = r;
                setAnswers(newAns);
              }}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={submit}
            className="px-8 cursor-pointer py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition duration-300 shadow-lg"
          >
            Submit Test
          </button>
        </div>

      </div>

    </div>
  )
}

export default TestPageBit