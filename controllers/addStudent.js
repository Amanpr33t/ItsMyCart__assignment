const Student = require('../models/student');
const { all } = require('../routes/studentRouter');

const addstudent = async (req, res) => {
    try {
        const { name, gender, dob, class_name, section, email } = req.body

        if (!name || !gender || !dob || !class_name || !section || !email) {
            throw new Error('Enter all credentials')
        }

        const words = req.body.name.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i].trim()
            words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
        }
        req.body.name = words.join(' ')

        req.body.gender = req.body.gender.toLowerCase()
        req.body.class_name = req.body.class_name.toUpperCase()
        req.body.section = req.body.section.toUpperCase()
        req.body.email = req.body.email.toLowerCase()

        const checkEmailExists = await Student.find({ email: req.body.email })
        if (checkEmailExists.length !== 0) {
            throw new Error('Email already exists')
        }

        const all_students = await Student.find({ class_name: req.body.class_name, section: req.body.section })

        const roll_number = all_students.length + 1
        console.log(roll_number)
        await Student.create({ ...req.body, roll_number })

        return res.status(200).json({ status: 'ok', msg: 'Student has been added successfully' })
    } catch (error) {
        throw new Error(error)
    }


}
module.exports = addstudent
