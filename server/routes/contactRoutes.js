const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, deleteMessage } = require('../controllers/contactController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/').post(sendMessage).get(protect, admin, getMessages);
router.route('/:id').delete(protect, admin, deleteMessage);

module.exports = router;
