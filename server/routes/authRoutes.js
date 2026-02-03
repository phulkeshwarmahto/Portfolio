const express = require('express');
const router = express.Router();
const { loginUser, registerUser, verifyEmail, forgotPassword, resetPassword, resendOTP } = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/resend-otp', resendOTP);

module.exports = router;
