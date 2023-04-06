const Student = require('../models/student')
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        const data = req.body
        const student = await Student.findOne({ _id: studentId })
        if (!student) {
            throw new Error('Student not found')
        }
        if (req.body.name) {
            const words = req.body.name.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i].trim()
                words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
            }
            req.body.name = words.join(' ')
        }

        if (req.body.gender) {
            req.body.gender = req.body.gender.toLowerCase()
        }
        if (req.body.class_name) {
            req.body.class_name = req.body.class_name.toUpperCase()
        }
        if (req.body.section) {
            req.body.section = req.body.section.toUpperCase()
        }
        if (req.body.email) {
            req.body.email = req.body.email.toLowerCase()
        }
        if (req.body.roll_number) {
            throw new Error('Roll number cannot be updated')
        }
        await Student.findOneAndUpdate({ _id: studentId },
            req.body,
            { new: true, runValidators: true })

        res.status(200).json({ status: 'ok', msg: 'Student has been successfully updated' })
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = updateStudent