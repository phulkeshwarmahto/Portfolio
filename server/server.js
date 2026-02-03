console.log('Starting server...');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
console.log('Connecting to database...');
connectDB();

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('API is running...');
});

try {
    app.use('/api/auth', require('./routes/authRoutes'));
    app.use('/api/projects', require('./routes/projectRoutes'));
    app.use('/api/contact', require('./routes/contactRoutes'));
    console.log('Routes loaded successfully.');
} catch (error) {
    console.error('Error loading routes:', error);
}

const PORT = process.env.PORT || 5000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
