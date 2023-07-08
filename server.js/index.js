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
