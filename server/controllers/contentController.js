import imagekit from "../configs/imageKit.js"
import Content from "../models/Content.js"
import fs from 'fs'

export const addContent = async(req, res) => {
    try {
        const {title, status, date, workCredit, description, contentCredit, type, instaLink, fbLink, linkedinLink} = JSON.parse(req.body.post) 
        const imageFile = req.file

        if(!title || !date || !type || !imageFile){
            return res.json({success: false, message: "Missing required fields."})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        // Upload image to imageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/content"
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

        await Content.create({title, type, date, workCredit, description, contentCredit, image, instaLink, fbLink, linkedinLink})

        res.json({success: true, message: "Content Added Successfully"})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const deleteContentById = async(req,res) => {
    try {
        const { id } = req.body;
        await Content.findByIdAndDelete(id);

        res.json({success: true, message: "Content Deleted Successfully"})

    } catch (error) {
        res.json({success: false, message: error.message})    
    }
}

export const getAllContent = async (req, res) => {
    try {
        const content = await Content.find({})
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
