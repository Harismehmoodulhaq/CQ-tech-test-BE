const express = require('express');
const router = express.Router();

const {
    getStudents,
    patchStudent
} = require('./../controllers/student.controller');

router.get('/students', getStudents);
router.patch('/students/:id', patchStudent);

module.exports = router;