const Contact = require("../models/contactModel");
exports.createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
