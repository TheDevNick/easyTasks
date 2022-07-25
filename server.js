const express = require('express')
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
require('dotenv').config()
const TodoTask = require('./models/Task')


// set up middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// connect mongoose
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => {console.log('connected to the database!')}
    )

app.get('/', async(req, res) => {
    try {
        TodoTask.find({}, (err, tasks) => {
            res.render('index.ejs', {TodoTask: tasks})
        })
    } catch (err) {
        if (err) return res.status(500).send(err)
    }
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`)
)