import mongoose from "mongoose";

const voteLogSchema = new mongoose.Schema({
  ip: { type: String, required: true},
  contestantId: { type: mongoose.Schema.Types.ObjectId, ref: "Contestant" }
}, { timestamps: true });

export default mongoose.model("VoteLog", voteLogSchema);
