const Skill = require('../models/Skill');

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({ category: 1, name: 1 });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private/Admin
const createSkill = async (req, res) => {
    const { name, category, icon, level } = req.body;

    try {
        const skill = new Skill({
            name,
            category,
            icon,
            level
        });

        const createdSkill = await skill.save();
        res.status(201).json(createdSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
const deleteSkill = async (req, res) => {
    try {
        // Using findByIdAndDelete or findById then deleteOne
        const skill = await Skill.findById(req.params.id);

        if (skill) {
            await skill.deleteOne();
            res.json({ message: 'Skill removed' });
        } else {
            res.status(404).json({ message: 'Skill not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSkills,
    createSkill,
    deleteSkill
};
