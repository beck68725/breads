const express = require('express')

//configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//routes
app.get('/', (req, res) => {
    res.json({
        greeting: 'Welcome'})
})

//Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})