const { GoogleGenAI } = require("@google/genai");

const improveMessageWithAI = async (message) => {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing");
        }

        // Initialize with API key explicitly to be safe, though SDK auto-detects
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const prompt = `
You are a professional communication assistant. Rewriting a contact form message.
- Fix grammar/spelling.
- Professional tone.
- Keep original intent.
- No extra info.

Message: "${message}"`;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error); // Log full error object
        throw new Error(error.message || "AI processing failed");
    }
};

module.exports = { improveMessageWithAI };
