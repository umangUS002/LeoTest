import express from "express";
import { registerEvent, getRegistrations, recruitmentRegistration, getRecruitment } from "../controllers/registrationController.js";
import upload from "../middleware/multer.js";

const regRouter = express.Router();

regRouter.post("/register", upload.single("image"), registerEvent);       // user submits registration
regRouter.get("/count", getRegistrations);         // admin view all registrations
regRouter.post("/registerRecruit", upload.single("image"), recruitmentRegistration);
regRouter.get("/countRecruitment", getRecruitment);         // admin view all registrations

export default regRouter;
