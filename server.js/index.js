/*
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/event-registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a schema for events
const eventSchema = new mongoose.Schema({
    title: String,
    description: String,
});

// Create a model for events
const Event = mongoose.model('Event', eventSchema);

// Define API routes

// Get all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a specific event by ID
app.get('/api/events/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a new event
app.post('/api/events', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
*/















/*
const express = require("express");
require('dotenv').config();
const app = express();
const db = require("./config/db");
const cors = require('cors')

// Connect To MongoDB.
db.connection.once("open", () => { console.log('✔✔ connect to MongoDB ✔✔') }).on("error", (err) => { console.log('Connection error ==> ', err) })

const PORT = process.env.PORT || 4000;

// Starting Server.
app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
})

app.use(express.json());
app.use(cors());

// Main Route.
app.use('/', require('./routes/index.js'));
*/














// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/events");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGO_URI = "mongodb://localhost:27017/event_registration"; // Replace with your MongoDB connection URI
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Register API endpoints
app.use("/api", eventRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
