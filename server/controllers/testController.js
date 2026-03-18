import Submission from "../models/Submission.js"
import Team from "../models/Team.js"
import { calculateCompatibility } from "../utils/compatibility.js"

export const submitAnswers = async (req, res) => {

  try {

    const { teamId, answers, teamName } = req.body;

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      req.ip;

    console.log("User IP:", ip);

    const existing = await Submission.findOne({ teamId, ip });

    if (existing) {
      return res.status(400).json({
        message: "You have already submitted from this device"
      });
    }

    // find all submissions for this team
    const submissions = await Submission.find({ teamId });

    // prevent more than 2 submissions
    if (submissions.length >= 2) {
      return res.status(400).json({
        message: "Both team members already submitted"
      });
    }

    // save new submission
    await Submission.create({
      teamId,
      answers,
      ip,
      teamName
    });

    // fetch again after saving
    const updatedSubmissions = await Submission.find({ teamId });

    // if both submitted
    if (updatedSubmissions.length === 2) {

      const s1 = updatedSubmissions[0];
      const s2 = updatedSubmissions[1];

      let totalScore = 0;

      for (let i = 0; i < s1.answers.length; i++) {

        totalScore += calculateCompatibility(
          s1.answers[i].ranking,
          s2.answers[i].ranking
        );

      }

      const finalScore = Math.round(totalScore / s1.answers.length);

      await Team.findOneAndUpdate(
        { teamId },
        {
          teamName,
          completed: true,
          score: finalScore
        },
        { upsert: true, new: true }
      );

      return res.json({
        status: "completed",
        score: finalScore
      });
    }

    return res.json({
      status: "waiting"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};

export const getResult = async (req, res) => {

  try {

    const { teamId } = req.params

    const team = await Team.findOne({ teamId })

    if (!team) {
      return res.json({
        status: "waiting"
      })
    }

    if (!team.completed) {
      return res.json({
        status: "waiting"
      })
    }

    return res.json({
      status: "completed",
      score: team.score
    })

  } catch (err) {

    res.status(500).json({
      message: err.message
    })

  }

}