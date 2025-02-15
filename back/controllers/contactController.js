const Contact = require("../models/contactModel"); // Make sure to create this model

// Create a new contact
const createContact = async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: "Contact created" });
    } catch (error) {
        res.status(400).json({ message: "Error creating contact", error });
    }
};

// Get all contacts
const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ message: "Error fetching contacts", error });
    }
};

// Delete a contact by ID
const deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Contact deleted" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting contact", error });
    }
};

module.exports = { createContact, getAllContacts, deleteContact };
