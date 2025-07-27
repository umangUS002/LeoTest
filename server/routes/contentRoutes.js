import express from 'express'
import auth from '../middleware/auth.js'
import { addContent, deleteContentById, getAllContent } from '../controllers/contentController.js'
import upload from '../middleware/multer.js'

const contentRouter = express.Router()

contentRouter.post('/add', upload.single('image'), auth, addContent)
contentRouter.post('/delete-content', auth, deleteContentById)
contentRouter.get('/all-content', getAllContent)

export default contentRouter