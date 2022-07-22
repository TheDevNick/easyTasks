const express = require('express')
const app = express()
const PORT = 3001
const mongoose = require('mongoose')
require('dotenv').config()


// set up middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// connect mongoose
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true},
    () => {console.log('connected to the database!')}
    )

app.get('/', (req, res) => {
    res.send('Hi Nick!')
})

app.listen(PORT, () => console.log(`server running on port: ${PORT}`)
)