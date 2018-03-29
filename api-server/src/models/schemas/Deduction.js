const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    concept: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})