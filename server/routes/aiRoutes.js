const express = require("express");
const { improveContactMessage } = require("../controllers/aiController.js");

const router = express.Router();

router.post("/improve-message", improveContactMessage);

module.exports = router;
