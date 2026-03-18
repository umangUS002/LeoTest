import mongoose from "mongoose"

const teamSchema = new mongoose.Schema({

  teamId: {
    type: String,
    required: true,
    unique: true
  },
  teamName: String,
  players: [String],
  completed: {
    type: Boolean,
    default: false
  },
  score: Number

}, { timestamps: true })

export default mongoose.model("Team", teamSchema)