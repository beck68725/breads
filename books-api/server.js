const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Books
app.use('/book', require('./controller/book_controller'))

//routes
app.get('/', (req, res) => {
    res.json({
        greeting: 'Welcome'})
})

app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})