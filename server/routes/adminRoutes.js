import express from 'express'
import auth from '../middleware/auth.js'
import { adminLogin } from '../controllers/adminControllers.js'

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)

export default adminRouter