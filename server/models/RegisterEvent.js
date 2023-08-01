const mongoose = require("mongoose");

const registerEventSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "EventUsers" },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },
    eventTitle: { type: String, required: true },
    eventDesc: { type: String, required: true },
    eventPeople: { type: Number, required: true },
    eventPrice: { type: Number, required: true },
}, { timestamps: true });

const EventRegister = mongoose.model("RegisterEvents", registerEventSchema);
module.exports = EventRegister;