import Registration from "../models/Registration.js";

export const registerEvent = async (req, res) => {
  try {
    const { name, email, phone, branch, batch, teamName } = req.body;

    if (!name || !email || !phone || !branch || !batch) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newRegistration = new Registration({
      name,
      email,
      phone,
      branch,
      batch,
      teamName,
    });

    await newRegistration.save();

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
