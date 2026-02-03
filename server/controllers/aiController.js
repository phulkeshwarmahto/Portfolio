const { improveMessageWithAI } = require("../utils/gemini.js");

const improveContactMessage = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || message.trim().length < 5) {
            return res.status(400).json({
                success: false,
                message: "Message must be at least 5 characters long",
            });
        }

        const improvedMessage = await improveMessageWithAI(message);

        res.status(200).json({
            success: true,
            improvedMessage,
        });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "AI processing failed",
        });
    }
};

module.exports = { improveContactMessage };
