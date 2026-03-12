import mongoose from "mongoose"

const submissionSchema = new mongoose.Schema({

  teamId: String,
  userId: String,
  answers: [
    {
      questionId: Number,

      ranking: [Number]
    }
  ]

}, { timestamps: true })

export default mongoose.model("Submission", submissionSchema)