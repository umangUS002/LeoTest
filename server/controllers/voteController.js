import VoteLog from "../models/VoteLog.js";
import Contestants from "../models/Contestants.js";

// get all contestants
export const getContestants = async (req, res) => {
  try {
    const contestants = await Contestants.find();
    res.json({ success: true, content: contestants });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


export const voteContestant = async (req, res) => {
  try {
    const { id } = req.params;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const existingVote = await VoteLog.findOne({ ip });
    if (existingVote) {
      return res.status(400).json({ success: false, message: "You have already voted from this IP." });
    }

    const contestant = await Contestants.findById(id);
    if (!contestant) {
      return res.status(404).json({ success: false, message: "Contestant not found" });
    }

    contestant.votes += 1;
    await contestant.save();

    await VoteLog.create({ ip, contestantId: contestant._id });

    res.json({ success: true, message: "Vote recorded", contestant });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getResults = async (req, res) => {
  try {
    const contestants = await Contestants.find().sort({ votes: -1 });
    res.json({ success: true, content: contestants });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
