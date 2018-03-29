const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    id: {
        type: String,
        required: true
    },
    concept: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['rent', 'deposit', 'utilities', 'agency fee', 'booking fee']   
    },
    lease: {
        type: ObjectId,
        ref: 'Lease'
    },
    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        enum: ['pending', 'paid']
    },

    dueDate: {
        type: Date,
        required: true
    },

    paymentDate: {
        type: Date,
    },

    amount: {
        type: Number,
        required: true
    }

})