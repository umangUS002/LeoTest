import express from "express"
import { getAllTeams, getDashboardStats } from "../controllers/testAdminController.js"

const testAdminRouter = express.Router()

testAdminRouter.get("/teams",getAllTeams)

testAdminRouter.get("/stats",getDashboardStats)

export default testAdminRouter