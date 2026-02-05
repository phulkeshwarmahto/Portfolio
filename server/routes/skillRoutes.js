const express = require('express');
const router = express.Router();
const { getSkills, createSkill, deleteSkill } = require('../controllers/skillController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/')
    .get(getSkills)
    .post(protect, admin, createSkill);

router.route('/:id')
    .delete(protect, admin, deleteSkill);

module.exports = router;
