const express = require("express");
const router = express.Router();
const EventRegister = require("../models/RegisterEvent");
const verifyToken = require("../middleware/verifyToken");

// Get all registered events (Endpoint: "http://localhost:5000/api/register" using "GET" (auth required).
router.get("/", verifyToken, async (req, res) => {
    try {
        const events = await EventRegister.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: "Events not found" });
    }
});

// Get all User Events (Endpoint: "http://localhost:5000/api/register/userevents" using "GET" (auth required).
router.get("/userevents", verifyToken, async (req, res) => {
    try {
        const userId = req.decoded._id
        const events = await EventRegister.find({ userId });
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: "Events not found" });
    }
});

// Get a specific registered event (Endpoint: "http://localhost:5000/api/register/:id" using "GET" (auth required).
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const event = await EventRegister.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Register a new event (Endpoint: "http://localhost:5000/api/register" using "POST" (auth required).
router.post("/", verifyToken, async (req, res) => {
    try {
        const user = req.decoded;
        const { eventId, eventTitle, eventDesc, eventPeople, eventPrice } = req.body;
        const newEvent = new EventRegister({ eventId, eventTitle, eventDesc, eventPeople, eventPrice, userId: user._id });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an existing register event (Endpoint: "http://localhost:5000/api/register/:id" using "PUT" (auth required).
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedEvent = await EventRegister.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an register event (Endpoint: "http://localhost:5000/api/register/:id" using "DELETE" (auth required).
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deletedEvent = await EventRegister.findByIdAndRemove(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(deletedEvent);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;