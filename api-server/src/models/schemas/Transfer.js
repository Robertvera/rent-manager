const { Schema, Schema: { ObjectId } } = require('mongoose')
const Deduction = require ('./Deduction.js')

module.exports = new Schema({
    concept: {
        type: String,
        required: true
    },

    deductions: [Deduction],

    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    base: {
        type: Number,
        required: true
    }


})