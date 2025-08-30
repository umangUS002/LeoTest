import express from "express";
import { registerEvent, getRegistrations } from "../controllers/registrationController.js";
import upload from "../middleware/multer.js";

const regRouter = express.Router();

regRouter.post("/register", upload.single("image"), registerEvent);       // user submits registration
regRouter.get("/all", getRegistrations);         // admin view all registrations

export default regRouter;
