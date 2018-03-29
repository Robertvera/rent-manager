const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    documentId: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        require: true
    },

    email: {
        type: String        
    },

    phoneNumber: {
        type: String        
    },

    nationality: {
        type: String
    },

    bankAccount: {
        type: String
    },

    password: {
        type: String,
        required: true
    }
    
})