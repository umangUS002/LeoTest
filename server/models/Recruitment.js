import mongoose from "mongoose";

const recruitmentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    roll: {type: String, required: true},
    email: { type: String, required: true },
    phone: { type: String, required: true },
    branch: { type: String, required: true },
    batch: { type: String, required: true },
    gender: { type: String, required: true },
    subTeam: {type: String, required: true},
    achievements: {type: String, default: ""},
    samples: {type: String, default: ""},
    ques1: {type: String, required: true},
    ques2: {type: String, required: true},
    ques3: {type: String, required: true},
    ques4: {type: String, required: true},
    query: {type: String, default: ""}
})

const Recruitment = mongoose.model("Recruitment", recruitmentSchema);

export default Recruitment;
