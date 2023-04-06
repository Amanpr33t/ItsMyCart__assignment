const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const connectDB = require('./db/connectDB')
const port = process.env.PORT || 9999
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
require('dotenv').config()

const cors = require('cors')
app.use(cors())

const notFound = require('./middleware/notFound')
const studentRouter = require('./routes/studentRouter')

app.use('/student/', studentRouter)
app.use(notFound)
app.use((req, res) => { res.status(400).json({ msg: 'some error occured' }) })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server running on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}
start()


