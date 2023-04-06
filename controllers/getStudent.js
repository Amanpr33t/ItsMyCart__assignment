const Student = require('../models/student')
const getStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        const student = await Student.findOne({
            _id: studentId
        })
        if (!student) {
            throw new Error('Student not found')
        }
        res.status(200).json({ status: 'ok', student })
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = getStudent