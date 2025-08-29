import express from "express";
import { registerEvent, getRegistrations } from "../controllers/registrationController.js";

const regRouter = express.Router();

regRouter.post("/register", registerEvent);       // user submits registration
regRouter.get("/all", getRegistrations);         // admin view all registrations

export default regRouter;
