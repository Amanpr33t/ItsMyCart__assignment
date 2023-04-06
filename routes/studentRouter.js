const express = require('express')
const router = express.Router()
const addStudent = require('../controllers/addStudent')
const deleteStudent = require('../controllers/deleteStudent')
const getAllStudents = require('../controllers/getAllStudents')
const getStudent = require('../controllers/getStudent')
const updateStudent = require('../controllers/updatestudent')

router.post('/add', addStudent)
router.delete('/delete/:id', deleteStudent)
router.get('/get/:id', getStudent)
router.get('/getAll', getAllStudents)
router.patch('/update/:id', updateStudent)


module.exports = router