import MMregistration from "../models/MMregistration.js";

export const registerEvent = async (req, res) => {
  try {
    const { name, email, phone, branch, batch, name2, email2, phone2, name3, email3, phone3, name4, email4, phone4, teamName, teamId } = req.body;

    if (!name || !email || !phone || !branch || !batch) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await  MMregistration.create({
      name,
      email,
      phone,
      branch,
      batch,
      teamName, name2, email2, phone2, name3, email3, phone3, name4, email4, phone4, teamId
    });


    res.json({ success: true, message: "Registration successfull!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering", error: error.message });
  }
};