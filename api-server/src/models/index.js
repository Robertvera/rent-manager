// import { truncate } from 'fs';

const mongoose = require('mongoose')
const { Schema, Schema: { ObjectId } } = mongoose

const Tenant = new Schema({
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

const Lease = new Schema({
    property: {
        type: ObjectId,
        ref: 'Property',
        required: true
    },
    id: {
        type: String,
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

const Payment = new Schema({
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
        required: true
    },

    amount: {
        type: Number,
        required: true
    }

})

const Property = new Schema({
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

const Owner = new Schema({
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

const Deduction = new Schema({
    concept: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

const Transfer = new Schema({
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

module.exports = {
    Tenant: mongoose.model('Tenant', Tenant),
    Lease: mongoose.model('Lease', Lease),
    Property: mongoose.model('Property', Property),
    Owner: mongoose.model('Owner', Owner),
    Payment: mongoose.model('Payment', Payment),
    Transfer: mongoose.model('Transfer', Transfer),
    Deduction: mongoose.model('Deduction', Deduction)
}