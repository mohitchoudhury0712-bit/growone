const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const dietRoutes = require('./routes/diet'); // <-- Add this

const app = express();

app.use(cors());
app.use(express.json());

// Register the routes
app.use('/api/auth', authRoutes);
app.use('/api/diet', dietRoutes); // <-- This connects the AI to the frontend

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
  })
  .catch(err => console.error(err));
  if (process.env.NODE_ENV !== 'production') {
    app.listen(5000);
}
module.exports = app;