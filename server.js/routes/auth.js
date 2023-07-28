const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/Admin");

// Register user
router.post("/register/user", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
});

// Register admin
router.post("/register/admin", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newAdmin = new Admin({ username, email, password });
        await newAdmin.save();

        const token = jwt.sign({ adminId: newAdmin._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error registering admin", error });
    }
});

// Login user or admin
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists in both User and Admin collections
        const user = await User.findOne({ email });
        const admin = await Admin.findOne({ email });

        if (user) {
            if (await user.comparePassword(password)) {
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
                return res.json({ token });
            }
        }

        if (admin) {
            if (await admin.comparePassword(password)) {
                const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET);
                return res.json({ token });
            }
        }

        res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
});



// Protect routes that require authentication
app.get("/api/protected", requireAuth, (req, res) => {
    // Only authenticated users/admins can access this route
    res.json({ message: "Protected route - authorized access only" });
});

module.exports = router;
