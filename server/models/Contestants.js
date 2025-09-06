import mongoose from "mongoose";

const contestantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  votes: { type: Number, default: 0 }
});

export default mongoose.model("Contestants", contestantSchema);
