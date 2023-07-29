const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const verifyToken = require('../middleware/verifyToken');

// Get all events (Endpoint: "http://localhost:5000/api/events" using "GET" (auth) Required).
router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Error fetching events", error });
    }
});

// Get event by ID (Endpoint: "http://localhost:5000/api/events/:id" using "GET" (auth) Required).
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Error fetching event", error });
    }
});

// Create a new event (Endpoint: "http://localhost:5000/api/events" using "POST" (only Admin).
router.post("/", verifyToken, async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: "Error creating event", error });
    }
});

// Update an existing event (Endpoint: "http://localhost:5000/api/events/:id" using "PUT" (only Admin).
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated event
            runValidators: true, // Run model validators on the update
        });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(400).json({ message: "Error updating event", error: error.message });
    }
});

// Delete an event (Endpoint: "http://localhost:5000/api/events/:id" using "DELETE" (only Admin).
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting event", error: error.message });
    }
});

module.exports = router;