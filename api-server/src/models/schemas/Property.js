const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    owner: {
        type: ObjectId,
        ref: 'Owner',
        required: true
    },

    reference: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true
    },

    rooms: {
        type: Number,
        required: true
    },

    sqm: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        require: true
    },

    neighbourhood: {
        type: String,
        required: true
    },

    picture: {
        type: String
    },

    status: {
        type: String,
        required: true,
        default: 'free',
        enum: ['free', 'busy', 'booked']
    }

})