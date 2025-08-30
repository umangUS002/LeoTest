import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  batch: { type: String, required: true },
  teamName: { type: String, default: "" },
  gender: { type: String, required: true },
  image: {type: String, required: true},
  degree: {type: String, required: true},
  caption: {type: String, required: true},
  reason: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
