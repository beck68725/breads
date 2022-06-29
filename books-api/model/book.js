const mongoose = require('mongoose')
const {Schema} = mongoose

//schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    year: {
        type: Number
    },
    quantity: {
        type: Number,
    },
    imageURL: {
        type: String,
        required: true
    },
})

module.exports = Book