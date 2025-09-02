import mongoose from "mongoose";

const mmregistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  batch: { type: String, required: true },
  name2: { type: String, default: "" },
  email2: { type: String, default: "" },
  phone2: { type: String, default: ""},
  name3: { type: String, default: "" },
  email3: { type: String, default: "" },
  phone3: { type: String, default: ""},
  teamName: { type: String, default: "", required: true },
  teamId: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

const MMregistration = mongoose.model("MMregistration", mmregistrationSchema);

export default MMregistration;
