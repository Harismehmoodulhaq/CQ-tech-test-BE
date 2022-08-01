const {
    getAll,
    updateStudent
} = require('./../db/repository/student.repository')

async function getStudents(req, res, next) {
    try {
        const students = await getAll()

        return res.status(200).json(students);
    } catch (error) {
        next(error);
    }
}

async function patchStudent(req, res, next) {
    try {
        const data = await updateStudent(req.body)
        return res.status(200).json({
            id: req.body.id
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudents,
    patchStudent
}