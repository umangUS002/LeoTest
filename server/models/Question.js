import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({

  text: String,
  options: [String],
  category: String

})

export default mongoose.model("Question", questionSchema)