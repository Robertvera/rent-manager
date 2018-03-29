const mongoose = require('mongoose')

const { Deduction, Lease, Owner, Payment, Property, Tenant, Transfer } = require('./schemas')


module.exports = {
    Tenant: mongoose.model('Tenant', Tenant),
    Lease: mongoose.model('Lease', Lease),
    Property: mongoose.model('Property', Property),
    Owner: mongoose.model('Owner', Owner),
    Payment: mongoose.model('Payment', Payment),
    Transfer: mongoose.model('Transfer', Transfer),
    Deduction: mongoose.model('Deduction', Deduction)
}