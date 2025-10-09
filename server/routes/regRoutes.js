import express from "express";
import { registerEvent, getRegistrations, recruitmentRegistration } from "../controllers/registrationController.js";
import upload from "../middleware/multer.js";

const regRouter = express.Router();

regRouter.post("/register", upload.single("image"), registerEvent);       // user submits registration
regRouter.get("/count", getRegistrations);         // admin view all registrations
regRouter.post("/registerRecruit", upload.single("image"), recruitmentRegistration);

export default regRouter;
