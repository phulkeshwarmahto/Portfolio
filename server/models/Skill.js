const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Frontend', 'Backend', 'Tools', 'Design', 'Languages', 'Other'],
        default: 'Other'
    },
    icon: {
        type: String, // Can be a URL or an icon identifier string (e.g., 'FaReact')
        required: true,
    },
    level: {
        type: Number, // 0 to 100
        default: 80,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Skill', skillSchema);
