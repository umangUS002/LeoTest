import express from 'express'
import auth from '../middleware/auth.js'
import { addEvent, deleteEventById, getAllEvents, toggleStatus } from '../controllers/eventController.js';
import upload from '../middleware/multer.js';

const eventRouter = express.Router()

eventRouter.post("/add", upload.single('image'), auth, addEvent);
eventRouter.post("/toggle-status", auth, toggleStatus);
eventRouter.post("/delete-event", auth, deleteEventById);
eventRouter.get("/all-events", getAllEvents);

export default eventRouter