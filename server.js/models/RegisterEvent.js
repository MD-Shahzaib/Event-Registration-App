// RegisterEvent Schema for Register Event of event-register-app. (by User)
const mongoose = require("mongoose");

const RegisterEvent_Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    people: { type: Number, required: true },
    price: { type: Number, required: true },
    eventDate: { type: Date, required: true },
}, { timestamps: true });

const EventRegister = mongoose.model("Register_Events", RegisterEvent_Schema);
module.exports = EventRegister;