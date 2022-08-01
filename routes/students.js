const express = require('express');
const router = express.Router();

const {
    getStudents,
    patchStudent
} = require('./../controllers/student.controller');

router.get('/students', getStudents);
// Update Routes
router.patch('/students/:id', patchStudent);

module.exports = router;