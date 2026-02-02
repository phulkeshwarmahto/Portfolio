const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/contactController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/').post(sendMessage).get(protect, admin, getMessages);

module.exports = router;
