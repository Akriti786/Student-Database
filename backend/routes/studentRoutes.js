// const express = require("express");
// const Student = require("../models/Student");
// const protect = require("../middleware/authMiddleware");

// const router = express.Router();

// // CREATE
// router.post("/", protect, async (req, res) => {
//     const student = await Student.create({
//         ...req.body,
//         userId: req.user.id
//     });

//     res.json(student);
// });

// // GET ALL
// router.get("/", protect, async (req, res) => {
//     const students = await Student.find({ userId: req.user.id });
//     res.json(students);
// });

// // UPDATE
// router.put("/:id", protect, async (req, res) => {
//     const updated = await Student.findOneAndUpdate(
//         { _id: req.params.id, userId: req.user.id },
//         req.body,
//         { new: true }
//     );

//     res.json(updated);
// });

// // DELETE
// router.delete("/:id", protect, async (req, res) => {
//     await Student.findOneAndDelete({
//         _id: req.params.id,
//         userId: req.user.id
//     });

//     res.json({ message: "Deleted" });
// });

// module.exports = router;


const express = require("express");
const Student = require("../models/Student");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* =========================
   CREATE STUDENT
========================= */
router.post("/", protect, async (req, res) => {
    try {
        const student = await Student.create({
            ...req.body,
            userId: req.user.id
        });

        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ message: "Error creating student", error: err.message });
    }
});

/* =========================
   GET ALL STUDENTS (USER ONLY)
========================= */
router.get("/", protect, async (req, res) => {
    try {
        const students = await Student.find({ userId: req.user.id });
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: "Error fetching students", error: err.message });
    }
});

/* =========================
   UPDATE STUDENT
========================= */
router.put("/:id", protect, async (req, res) => {
    try {
        const updated = await Student.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: "Error updating student", error: err.message });
    }
});

/* =========================
   DELETE SINGLE STUDENT
========================= */
router.delete("/:id", protect, async (req, res) => {
    try {
        const deleted = await Student.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!deleted) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ message: "Student deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting student", error: err.message });
    }
});

/* =========================
   DELETE ALL STUDENTS (USER ONLY)
========================= */
router.delete("/", protect, async (req, res) => {
    try {
        const result = await Student.deleteMany({ userId: req.user.id });

        res.json({
            message: "All students deleted successfully",
            deletedCount: result.deletedCount
        });
    } catch (err) {
        res.status(500).json({ message: "Error deleting all students", error: err.message });
    }
});

module.exports = router;