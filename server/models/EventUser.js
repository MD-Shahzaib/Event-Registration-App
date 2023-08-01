const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = require("../config/jwt");

// User_Schema.
const eventUserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    tokens: [String],
}, { timestamps: true });

// (______________________________ [All-Methods] __________________________________)
// Method (1) = Encrypt Password and save into database.
eventUserSchema.pre("save", function (next) {
    const user = this;
    if (user.isModified("password")) {
        var salt = bcryptjs.genSaltSync(10);
        var hash = bcryptjs.hashSync(user.password, salt);
        user.password = hash;
    }
    next();
});

// Method (2) = Compare Normal and Encrypted Password.
eventUserSchema.methods.comparePassword = function (password) {
    const user = this;
    return bcryptjs.compareSync(password, user.password);
};

// Method (3) = Generate Token.
eventUserSchema.methods.generateToken = async function () {
    const user = this;
    const { _id } = user;
    const token = jwt.sign({ _id }, secret);
    user.tokens.push(token);
    await user.save();
    return token;
};
// (______________________________ [All-Methods] __________________________________)

// Add User_Schema Collection Into MongoDB.
const Users = mongoose.model('EventUsers', eventUserSchema);

// Export User_Schema.
module.exports = Users;