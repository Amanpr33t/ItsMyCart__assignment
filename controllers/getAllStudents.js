const Student = require('../models/student')

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await Student.find({}).sort('class_name').sort('roll_number')
        res.status(200).json({ status: 'ok', count: allStudents.length, students: allStudents })
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = getAllStudents