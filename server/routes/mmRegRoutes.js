import express from "express";
import { getRegistrations, registerEvent } from "../controllers/mmRegController.js";

const mmRegRouter = express.Router();

mmRegRouter.post("/register",  registerEvent);       // user submits registration
mmRegRouter.get("/count",  getRegistrations);       // user submits registration

export default mmRegRouter;
