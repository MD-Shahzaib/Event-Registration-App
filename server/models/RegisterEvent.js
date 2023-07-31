const mongoose = require("mongoose");

const RegisterEvent_Schema = new mongoose.Schema({
    eventUser: { type: mongoose.Schema.Types.ObjectId, ref: "event_users" },
    eventId: { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventPeople: { type: Number, required: true },
    eventPrice: { type: Number, required: true },
}, { timestamps: true });

const EventRegister = mongoose.model("Register_Events", RegisterEvent_Schema);
module.exports = EventRegister;