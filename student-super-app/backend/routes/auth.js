const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure your User model exists in models folder
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// --- 1. REGISTER ROUTE ---
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, age, gender } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({
            name,
            email,
            password: hashedPassword,
            age,
            gender
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Registration failed. Check server logs." });
    }
});

// --- 2. LOGIN ROUTE ---
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials" });

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        // Create JWT Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Send back token and user data (excluding password)
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                gender: user.gender
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Login failed" });
    }
});

// --- 3. DISCOVER STUDENTS ROUTE ---
// This route fetches everyone so you can see them on the Discover page
router.get('/students', async (req, res) => {
    try {
        // Find all users but only return name, age, and gender for privacy
        const users = await User.find({}, 'name age gender'); 
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching student list" });
    }
});

module.exports = router;