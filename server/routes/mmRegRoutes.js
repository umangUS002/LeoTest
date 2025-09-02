import express from "express";
import { registerEvent } from "../controllers/mmRegController.js";

const mmRegRouter = express.Router();

mmRegRouter.post("/register",  registerEvent);       // user submits registration

export default mmRegRouter;
