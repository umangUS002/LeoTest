import fs from 'fs'
import imagekit from '../configs/imageKit.js'
import Event from '../models/Events.js'

export const addEvent = async(req, res) => {
    try {
        const {name, status, date, venue, description, teamSize} = JSON.parse(req.body.event) 
        const imageFile = req.file

        if(!name || !status || !date || !imageFile || !description){
            return res.json({success: false, message: "Missing required fields."})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        // Upload image to imageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/events"
        })

        // Optimization through imageKit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},  // Auto compression
                {format: 'webp'},   // Convert to modern format
                {width: '1280'}      // Width resizing
            ]
        })

        const image = optimizedImageUrl;

        await Event.create({name, status, date, venue, description, teamSize, image})

        res.json({success: true, message: "Event added successfully"})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const deleteEventById = async(req,res) => {
    try {
        const { id } = req.body;
        await Event.findByIdAndDelete(id);

        res.json({success: true, message: "Event deleted successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})    
    }
}

export const toggleStatus = async(req,res) => {
    try {
        const { id } = req.body;
        const {newStatus} = req.body;

        const event = await Event.findById(id);
        event.status = newStatus;
        await event.save();
        
        res.json({success: true, message: "Event Status Updated"})
    } catch (error) {
        res.json({success: false, message: error.message})    
    }
}

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({})
        res.json({success: true, events})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
