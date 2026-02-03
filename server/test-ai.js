require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testAI() {
    console.log("Starting AI Test...");
    console.log("API Key present:", !!process.env.GEMINI_API_KEY);

    if (!process.env.GEMINI_API_KEY) {
        console.error("ERROR: GEMINI_API_KEY is missing from .env");
        return;
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        console.log("Calling Gemini API...");
        const result = await model.generateContent("Hello, say 'API IS WORKING'");
        const response = await result.response;
        console.log("RESPONSE:", response.text());
        console.log("✅ SUCCESS!");
    } catch (error) {
        console.error("❌ GEMINI API ERROR:", error.message);
        if (error.stack) console.error(error.stack);
    }
}

testAI();
