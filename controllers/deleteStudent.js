const Student = require('../models/student')
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        const student = await Student.findOne({
            _id: studentId
        })

        if (!student) {
            throw new Error('Student not found')
        }

        const removedStudent = await Student.findOneAndDelete({
            _id: req.params.id
        })

        const allStudents = await Student.find({ section: removedStudent.section, class_name: removedStudent.class_name })

        if (removedStudent.roll_number < allStudents.length + 1) {
            for (let i = removedStudent.roll_number + 1; i <= allStudents.length + 1; i++) {
                await Student.findOneAndUpdate({ roll_number: i, section: removedStudent.section, class_name: removedStudent.class_name },
                    { roll_number: i - 1 },
                    { new: true, runValidators: true })
            }
        }
        res.status(200).json({ status: 'ok', msg: 'Student has been deleted' })
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = deleteStudent