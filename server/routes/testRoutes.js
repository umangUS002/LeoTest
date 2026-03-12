import express from "express"
import {submitAnswers,getResult} from "../controllers/testController.js"

const testRouter = express.Router()

testRouter.post("/submit",submitAnswers)

testRouter.get("/result/:teamId",getResult)

export default testRouter