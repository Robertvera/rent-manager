const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    documentId: {
        type: String,
        required: true,
        unique: true
    },

    active: Boolean,

    email: {
        type: String
    },

    phoneNumber: {
        type: String        
    },

    nationality: {
        type: String
    }
})