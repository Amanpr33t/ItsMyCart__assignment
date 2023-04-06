const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true
    },
    gender: {
        type: String,
        required: [true, 'Please provide gender'],
        enum: ['male', 'female'],
        trim: true
    },
    dob: {
        type: Date,
        required: [true, 'Please provide date of birth']
    },
    class_name: {
        type: String,
        required: [true, 'Please provide class name'],
        trim: true,
        enum: ['NURSERY', 'K.G.', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    section: {
        type: String,
        required: [true, 'Please provide section'],
        trim: true,
        enum: ['A', 'B', 'C', 'D']
    },
    roll_number: {
        type: Number,
        required: [true, 'Please provide roll number']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        trim: true
    }
}, { timestamps: true })
module.exports = mongoose.model('Student', StudentSchema)