const express = require("express");
const Student = require("../models/Student");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE
router.post("/", protect, async (req, res) => {
    const student = await Student.create({
        ...req.body,
        userId: req.user.id
    });

    res.json(student);
});

// GET ALL
router.get("/", protect, async (req, res) => {
    const students = await Student.find({ userId: req.user.id });
    res.json(students);
});

// UPDATE
router.put("/:id", protect, async (req, res) => {
    const updated = await Student.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );

    res.json(updated);
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
    await Student.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id
    });

    res.json({ message: "Deleted" });
});

module.exports = router;