const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { createContact, getAllContacts, deleteContact } = require("./controllers/contactController");

dotenv.config();

const app = express();
app.use(express.json()); // Make sure this is here to parse JSON data

// CORS setup to allow frontend to make requests
const corsOptions = {
    origin: "http://localhost:3001", // React frontend's port
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Define your routes
app.post("/api/contact", createContact);
app.get("/api/contacts", getAllContacts);
app.delete("/api/contact/:id", deleteContact);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/contact")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// Start the server
const PORT = process.env.PORT || 5000; // Make sure it's running on port 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
