// backend/models/Fitness.js
const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  foodItems: [{
    name: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  }],
  dailyGoal: { type: Number, default: 2000 }
}, { timestamps: true });

module.exports = mongoose.model('Fitness', fitnessSchema);