import express from "express";
import { getContestants, voteContestant, getResults } from "../controllers/voteController.js";

const router = express.Router();

router.get("/", getContestants);           // public: list contestants
router.post("/vote/:id", voteContestant);  // public: vote
router.get("/results", getResults);        // admin: view results

export default router;
