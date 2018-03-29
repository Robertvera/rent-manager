const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },
    tenants: [
        {
            type: ObjectId,
            ref: 'Tenant',
            required: true
        }
    ],
    password: {
        type: String,
        required: true
    },
    active: Boolean,
    starting: {
        type: Date,
        required: true
    },

    ending: {
        type: Date,
        required: true
    },
    
    price: {
        type: Number,
        required: true
    },
    
    deposit: {
        type: Number,
        required: true
    }
})