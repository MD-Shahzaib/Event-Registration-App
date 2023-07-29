// Event Schema for Create Event of event-register-app. (only admin)
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const Event = mongoose.model("Events", eventSchema);
module.exports = Event;