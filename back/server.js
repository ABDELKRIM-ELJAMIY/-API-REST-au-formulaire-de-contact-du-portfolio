const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { createContact, getAllContacts } = require("./controllers/contactController");


dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

app.post("/api/contact", createContact);
app.get("/api/contacts", getAllContacts);
app.delete("/api/contact/:name")


mongoose.connect("mongodb://localhost:27017/contact", {
  
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
