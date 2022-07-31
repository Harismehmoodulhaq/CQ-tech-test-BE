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
        await updateStudent(req.body)
        return res.status(204);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getStudents,
    patchStudent
}