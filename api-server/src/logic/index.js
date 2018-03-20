const { Lease } = require('../models/index')
const { Property } = require('../models/index')
const { Tenant } = require('../models/index')
const { Owner } = require('../models/index')
const { Payment } = require('../models/index')
const { Transfer } = require('../models/index')
const { Deduction } = require('../models/index')
const validate = require('./validate')
const uuid = require('uuid/v4')
const moment = require('moment')

module.exports = {

    /////////////////////////////// TRANSFER METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    registerTransfer(concept, _deductions, property, date, base) {
        return Promise.resolve()
            .then(() => {
                const deductions = _deductions.map(deduction => new Deduction({

                }))              
                return Transfer.create({ concept, deductions, property, date, base })
            })
    },

    listTransfer() {
        return Transfer.find({}, { _id: 0, __v: 0 })
    },

    updateTransfer(_id, concept, deductions, property, date, base) {
        return Promise.resolve()
            .then(() => {
                validate({ concept, property, date, base })

                return Transfer.findOne({ _id })
            })
            .then(transfer => {
                if (!transfer) throw Error('the transfer does not exist')

                return Transfer.updateOne({ _id }, { concept, deductions, property, date, base })
            })
    },

    retrieveTransfer(_id) {
        return Promise.resolve()
            .then(() => {
                validate({ _id })

                return Transfer.findOne({ _id }, { _id: 0, __v: 0 })
            })
            .then(transfer => {
                if (!transfer) throw Error('transfer does not exist')

                return transfer
            })
    },

    retrieveTransferQuery(query) {
        return Transfer.find({ $or: [{ property: new RegExp(query, 'i') }] }, { _id: 0, __v: 0 })
    },

    removeTransfer(_id) {
        return Promise.resolve()
            .then(() => {
                validate({ _id })

                return Transfer.findOne({ _id })
            })
            .then(transfer => {
                if (!transfer) throw Error('transfer does not exist')

                return Transfer.deleteOne({ _id })
            })
    },

    /////////////////////////////// DEDUCTION METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    registerDeduction(concept, amount) {
        return Promise.resolve()
            .then(() => {              
                return Deduction.create({ concept, amount })
            })
    },

    listDeduction() {
        return Deduction.find({}, { _id: 0, __v: 0 })
    },

    retrieveDeduction(_id) {
        return Promise.resolve()
            .then(() => {
                validate({ _id })

                return Deduction.findOne({ _id }, { _id: 0, __v: 0 })
            })
            .then(deduction => {
                if (!deduction) throw Error('transfer does not exist')

                return deduction
            })
    },

    /////////////////////////////// OWNER METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    registerOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount, password) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId, name, surname, password })

                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (owner) throw Error('owner already exists')

                return Owner.create({ documentId, name, surname, email, phoneNumber, nationality, bankAccount, password })
                    .then(() => documentId)
            })
    },

    listOwner() {
        return Owner.find({}, { _id: 0, __v: 0 })
    },

    updateOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount, password) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId, name, surname, email, phoneNumber, nationality, bankAccount, password })

                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (!owner) throw Error('the owner does not exists')

                return Owner.updateOne({ documentId }, { name, surname, email, phoneNumber, nationality, bankAccount, password })
            })
    },

    retrieveOwner(documentId) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId })
                
                return Owner.findOne({ documentId }, { _id: 0, __v: 0 })
            })
            .then(owner => {
                if (!owner) throw Error('owner does not exist')

                return owner
            })
    },

    retrieveOwnerQuery(query) {
        return Owner.find({ $or: [{ name: new RegExp(query, 'i') }, { surname: new RegExp(query, 'i') }, { documentId: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }, { phoneNumber: new RegExp(query, 'i') }] }, { _id: 0, password: 0, __v: 0 })
    },

    removeOwner(documentId) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId })

                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (!owner) throw Error('owner does not exist')

                return Owner.deleteOne({ documentId })
                    .then(() => documentId)
            })
    },

    /////////////////////////////// PAYMENT METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    registerPayment(concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return Promise.resolve()
            .then(() => {

                const id = uuid()
                

                return Payment.create({ id, concept, type, lease, property, status, dueDate, paymentDate, amount })
                    .then(() => id)
            })
    },

    listPayment() {
        return Payment.find({}, { _id: 0, __v: 0 })
    },

    updatePayment(id, concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return Promise.resolve()
            .then(() => {
                validate({ id, concept, type, lease, property, status, dueDate, paymentDate, amount })

                return Payment.findOne({ id })
            })
            .then(payment => {
                if (!payment) throw Error('the payment does not exist')

                return Payment.updateOne({ id }, { concept, type, lease, property, status, dueDate, paymentDate, amount })
            })
    },

    retrievePayment(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Payment.findOne({ id }, { _id: 0, __v: 0 })
            })
            .then(payment => {
                if (!payment) throw Error('payment does not exist')

                return payment
            })
    },

    retrievePaymentQuery(query) {
        return Payment.find({ $or: [{ concept: new RegExp(query, 'i') }] }, { _id: 0, __v: 0 })
    },

    removePayment(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Payment.findOne({ id })
            })
            .then(payment => {
                if (!payment) throw Error('payment does not exist')

                return Payment.deleteOne({ id })
            })
    },



    /////////////////////////////// PROPERTY METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    
    registerProperty(owner, reference, address, rooms, sqm, neighbourhood, picture, status) {
        return Promise.resolve()
            .then(() => {
                return Property.findOne({ reference })
            })
            .then(property => {
                if (property) throw Error('the property already exists')

                return Property.create({ owner, reference, address, rooms, sqm, neighbourhood, picture, status })
                    .then(() => reference)
            })
    },

    listProperty() {
        return Property.find({}, { _id: 0, __v: 0 })
    },

    updateProperty(reference, owner, address, rooms, sqm, neighbourhood, picture, status) {
        return Promise.resolve()
            .then(() => {
                validate({ owner, address, rooms, sqm, neighbourhood, status })

                return Property.findOne({ reference })
            })
            .then(property => {
                if (!property) throw Error('the property does not exist')

                return Property.updateOne({ reference },{ owner, address, rooms, sqm, neighbourhood, status })
            })
    },

    retrieveProperty(reference) {
        return Promise.resolve()
            .then(() => {
                validate({ reference })

                return Property.findOne({ reference }, { _id: 0, __v: 0 })
            })
            .then(property => {
                if (!property) throw Error('property does not exist')

                return property
            })
    },

    retrievePropertyQuery(query) {
        return Property.find({ $or: [{ reference: new RegExp(query, 'i') }, { address: new RegExp(query, 'i') }] }, { _id: 0, __v: 0 })
    },

    removeProperty(reference) {
        return Promise.resolve()
            .then(() => {
                validate({ reference })

                return Property.findOne({ reference })
            })
            .then(property => {
                if (!property) throw Error('property does not exist')

                return Property.deleteOne({ reference })
            })
    },



    /////////////////////////////// LEASE METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    registerLease(property, tenants, password, active, starting, ending, price, deposit) {        
        return Promise.resolve()
            .then(() => {
                return Property.findOne({ _id: property })
            })
            .then(property => {
                if (property.status == 'busy') throw Error('the property you selected already has an active lease')

                const id = uuid()

                return Lease.create({ property, id, tenants, password, active, starting, ending, price, deposit })
                    .then(() => id)
            })
    },

    checkLogin(_id, _password) {
        return Promise.resolve()
            .then(()=> {                
                return Lease.findOne({ id: _id })                
            })
            .then(lease => {
                if(!lease) throw Error('We cannot find the entered LeaseID')

                if(lease.password != _password) {
                    throw Error ('The password is wrong, please try again')
                }

                return lease
            })
    },

    listLease() {
        return Lease.find({}, { _id: 0, __v:0 })
    },

    updateLease(id, property, tenants, password, active, starting, ending, price, deposit) {
        return Promise.resolve()
            .then(() => {
                validate({ property, tenants, password, active, starting, ending, price, deposit })

                return Lease.findOne({ id }).populate('property')
            })
            .then(lease => {

                if(lease.property._id == property) {
                    return Lease.updateOne({id}, { property, tenants, password, active, starting, ending, price, deposit })
                } else if (lease.property.status == 'busy') {
                    throw Error('the property you selected already has an active lease')
                } 

                return Lease.updateOne({id}, { property, tenants, password, active, starting, ending, price, deposit })
                
            })
    },

    retrieveLease(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Lease.findOne({ id }, { _id: 0, password: 0 , __v:0 })
            })
            .then(lease => {
                if (!lease) throw Error('lease does not exist')

                return lease
            })
    },

    retrieveLeaseQuery(query) {
        return Lease.find({ $or: [{ property: new RegExp(query, 'i') }] }, { _id: 0, password: 0, __v: 0 })
    },

    removeLease(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Lease.findOne({ id })
            })
            .then(lease => {
                if (!lease) throw Error('lease does not exist')

                return Lease.deleteOne({ id })
            })
    },

    /////////////////////////////// TENANT METHODS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    registerTenant(name, surname, documentId, active, email, phoneNumber, nationality) {
        return Promise.resolve()
            .then(() => {
                validate({ name, surname, documentId, active, email, phoneNumber, nationality })

                return Tenant.findOne({ documentId })
            })
            .then(tenant => {
                if (tenant) throw Error('tenant already exists')

                return Tenant.create({ name, surname, documentId, active, email, phoneNumber, nationality })
                    .then(() => documentId)
            })
    },

    listTenant() {
        return Tenant.find({}, { _id: 0, documentId: 1, name: 1, surname: 1, active: 1, email: 1, phoneNumber: 1, nationality: 1 })
    },

    retrieveTenant(documentId) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId })

                //return User.findOne({ id }, 'id name surname email username') // WARN! it returns _id too!
                return Tenant.findOne({ documentId }, { _id: 0, __v: 0 })
            })
            .then(tenant => {
                if (!tenant) throw Error('tenant does not exist')

                return tenant
            })
    },

    retrieveTenantQuery(query) {
        return Tenant.find({ $or: [{ name: new RegExp(query, 'i') }, { surname: new RegExp(query, 'i') }, { documentId: new RegExp(query, 'i') }, { email: new RegExp(query, 'i') }, { phoneNumber: new RegExp(query, 'i') }] }, { _id: 0, password: 0, __v: 0 })
    },

    removeTenant(documentId) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId })

                return Tenant.findOne({ documentId })
            })
            .then(tenant => {
                if (!tenant) throw Error('tenant does not exist')

                return Tenant.deleteOne({ documentId })
                    .then(() => documentId)
            })
    }

}