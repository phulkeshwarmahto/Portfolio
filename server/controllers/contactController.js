const Contact = require('../models/Contact');

// @desc    Send a message
// @route   POST /api/contact
// @access  Public
const sendMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: 'Please add all fields' });
        return;
    }

    try {
        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private (Admin)
const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    sendMessage,
    getMessages,
};
