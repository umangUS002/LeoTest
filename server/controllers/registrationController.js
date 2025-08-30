import Registration from "../models/Registration.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";

export const registerEvent = async (req, res) => {
  try {
    const { name, email, phone, branch, batch, teamName, gender, caption, reason, degree } = JSON.parse(req.body.contestant);
    const imageFile = req.file

    if (!name || !email || !phone || !branch || !batch || !gender || !imageFile || !caption || !reason || !degree) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path)
    // Upload image to imageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/MrMissPantheon"
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

    await  Registration.create({
      name,
      email,
      phone,
      branch,
      batch,
      teamName,
      gender,
      image,
      caption,
      reason,
      degree
    });


    res.json({ success: true, message: "Registration successfull!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering", error: error.message });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().populate("eventId");
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registrations" });
  }
};
