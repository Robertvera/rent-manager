const { Lease } = require('../models/index')
const { Property } = require('../models/index')
const { Tenant } = require('../models/index')
const { Owner } = require('../models/index')
const { Payment } = require('../models/index')
const { Transfer } = require('../models/index')
const { Deduction } = require('../models/index')
const validate = require('./validate')
const uuid = require('uuid/v4')


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

    registerOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId, name, surname })

                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (owner) throw Error('owner already exists')

                const password = name+surname

                return Owner.create({ documentId, name, surname, email, phoneNumber, nationality, bankAccount, password })
                    .then(() => documentId)
            })
    },

    listOwner() {
        return Owner.find({}, { __v: 0 })
    },

    updateOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId, name, surname, email, phoneNumber, nationality, bankAccount})

                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (!owner) throw Error('the owner does not exists')

                return Owner.updateOne({ documentId }, { name, surname, email, phoneNumber, nationality, bankAccount})
            })
    },

    checkLoginOwner(documentId, password) {
        return Promise.resolve()
            .then(() => {
                return Owner.findOne({ documentId })
            })
            .then(owner => {
                if (!owner) throw Error('We cannot find the entered ID')

                if (owner.password != password) {
                    throw Error('The password is wrong, please try again')
                }

                return Owner.findOne(owner, { password: 0 })
            })
    },

    retrieveOwner(documentId) {
        return Promise.resolve()
            .then(() => {
                validate({ documentId })

                return Owner.findOne({ documentId }, { __v: 0 })
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
        return Payment.find({}, { _id: 0, __v: 0 }).populate('property')
    },

    updatePayment(id, concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return Promise.resolve()
            .then(() => {
                validate({ concept, type, lease, property, status, dueDate, amount })

                return Payment.findOne({ _id: id })
            })
            .then(payment => {
                if (!payment) throw Error('the payment does not exist')

                return Payment.updateOne({ _id: id }, { concept, type, lease, property, status, dueDate, paymentDate, amount })
            })
    },

    retrievePayment(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Payment.findOne({ _id: id }, { __v: 0 })
            })
            .then(payment => {
                if (!payment) throw Error('payment does not exist')

                return payment
            })
    },

    retrievePaymentByLeaseId(leaseId) {
        return Promise.resolve()
            .then(() => {
                return Payment.find({ lease: leaseId })
            })
            .then(payments => {
                return payments
            })
    },

    retrievePaymentByProperty(propertyId) {
        return Promise.resolve()
            .then(() => {
                return Payment.find({ property: propertyId })
            })
    },

    retrievePaymentByDate(status, starting, ending) {
        return Promise.resolve()
        .then(()=> {

            if (starting ==="all" || ending === "all") {
                return Payment.find({ status }).populate('property')                
            } else if (status === "all" && starting ==="all" && ending === "all") {
                return Payment.find({}).populate('property')                
            } else if (status === 'all') {
                let _starting = (new Date (starting)).toISOString()
                let _ending = (new Date (ending)).toISOString()
        
                return Payment.find({ paymentDate: { '$gte': _starting, '$lte': _ending } }, { __v: 0 }).populate('property')                
            }
            let _starting = (new Date (starting)).toISOString()
            let _ending = (new Date (ending)).toISOString()
            return Payment.find({status, paymentDate: { '$gte': _starting, '$lte': _ending } }, { __v: 0 }).populate('property')                
        })
    },

    retrievePaymentByStatus(status) {
        return Payment.find({ status }).populate('property')
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

    registerProperty(owner, reference, address, rooms, sqm, price, neighbourhood, picture, status) {
        return Promise.resolve()
            .then(() => {
                return Property.findOne({ reference })
            })
            .then(property => {
                if (property) throw Error('the property already exists')

                return Property.create({ owner, reference, address, rooms, sqm, price, neighbourhood, picture, status })
                    .then(() => reference)
            })
    },

    listProperty() {
        return Property.find({}, { __v: 0 })
    },

    updateProperty(reference, owner, address, rooms, sqm, price, neighbourhood, picture, status) {
        return Promise.resolve()
            .then(() => {
                validate({ owner, address, rooms, sqm, price, neighbourhood, status })

                return Property.findOne({ reference })
            })
            .then(property => {
                if (!property) throw Error('the property does not exist')

                return Property.updateOne({ reference }, { owner, address, rooms, sqm, price, neighbourhood, picture, status })
            })
    },

    retrieveProperty(reference) {
        return Promise.resolve()
            .then(() => {
                validate({ reference })

                return Property.findOne({ reference }, {  __v: 0 }).populate('owner')
            })
            .then(property => {
                if (!property) throw Error('property does not exist')

                return property
            })
    },

    retrievePropertyQuery(status, hood, query) {
        if (status === 'all' && hood === 'all') {
            return Property.find({ reference: new RegExp(query, 'i') }, { _id: 0, __v: 0 })
        } else if (hood === 'all') {
            return Property.find({ status, reference: new RegExp(query, 'i') }, { _id: 0, __v: 0 })
        } else if (status === 'all') {
            return Property.find({ neighbourhood: hood, reference: new RegExp(query, 'i') }, { _id: 0, __v: 0 })
        }

        return Property.find({ status, neighbourhood: hood, reference: new RegExp(query, 'i') }, { _id: 0, __v: 0 })
    },

    retrievePropertyByFilters(status, hood) {
        if (status === 'all' && hood === 'all') {
            return Property.find({}, { _id: 0, __v: 0 })
        } else if (hood === 'all') {
            return Property.find({ status }, { _id: 0, __v: 0 })
        } else if (status === 'all') {
            return Property.find({ neighbourhood: hood }, { _id: 0, __v: 0 })
        }

        return Property.find({ status, neighbourhood: hood }, { _id: 0, __v: 0 })
    },

    retrievePropertyByStatus(status) {
        return Property.find({ status })
    },

    retrievePropertyByOwner(id) {
        return Property.find({owner: id})
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


    registerLease(property, tenants, active, starting, ending, price, deposit) {
        return Promise.resolve()
            .then(() => {
                return Property.findOne({ _id: property })
            })
            .then(_property => {
                if (_property.status == 'busy') throw Error('the property you selected already has an active lease')

                const password = _property.reference

                return Lease.create({ property, tenants, password, active, starting, ending, price, deposit })
                    .then(lease => {
                        return Property.findByIdAndUpdate(property , {status: 'busy'} )
                        .then(() => {
                            return Lease.findById({_id: lease._id})

                        })                        
                    })
            })
    },

    checkLogin(id, password) {
        return Promise.resolve()
            .then(() => {
                return Lease.findOne({ _id: id })
            })
            .then(lease => {
                if (!lease) throw Error('We cannot find the entered LeaseID')

                if (lease.password != password) {
                    throw Error('The password is wrong, please try again')
                }

                return Lease.findOne(lease, { password: 0 })
            })
    },

    listLease() {
        return Lease.find({}, { password: 0, __v: 0 }).populate('property')
    },

    checkLeaseStatus (id) {
        return Promise.resolve()
            .then(()=> {
                return Lease.find({id}, { password: 0, __v: 0 })                            
            })
            .then((lease) => {
                let now = (new Date).toISOString()
                let isoDate = lease.ending.toISOString()                
                    if(isoDate < now) {
                        return Lease.updateOne({id},{active: false})
                    }                
            })
    },

    updateLease(id, property, tenants, active, starting, ending, price, deposit) {
        return Promise.resolve()
            .then(() => {
                validate({ property, tenants, active, starting, ending, price, deposit })

                return Lease.findOne({ _id: id }).populate('property')
            })
            .then(lease => {
                    return Lease.updateOne({ _id: id }, { property, tenants, active, starting, ending, price, deposit })
            })
    },

    retrieveLease(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Lease.findOne({ _id: id }, { password: 0, __v: 0 }).populate('tenants').populate('property')
            })
            .then(lease => {
                if (!lease) throw Error('lease does not exist')

                return lease
            })
    },

    retrieveCurrentLeaseByProperty(id) {
        return Promise.resolve()
            .then(()=> {
                return Lease.find({property: id})
            })
            .then((leases)=> {
                for (let i = 0; i < leases.length; i++) {
                    if (leases[i].active) return leases[i]
                }
            })

    },
    
    retrieveLeaseByProperty(id) {
        return Promise.resolve()
            .then(()=> {
                return Lease.find({property: id})
            })
    },

    retrieveLeaseQuery(status, query) {
        return Promise.resolve()
            .then(()=> {
                if (status === 'all') {
                    return Lease.find({}, { __v: 0 }).populate('property')
                    .then((leases) => {
                        let _query = query.toUpperCase()
                        let filtered = leases.filter((lease)=> {
                            return lease.property.reference.includes(_query)
                        })
                        return filtered
                    })                    
                } else {
                    return Lease.find({active: status}).populate('property')
                        .then((leases) => {
                            let _query = query.toUpperCase()
                            let filtered = leases.filter((lease)=> {
                                return lease.property.reference.includes(_query)
                            })
                            return filtered
                        })                    
            }})
            
    },

    retrieveLeaseByStatus(status) {
        if (status === 'all') {
            return Lease.find({}, { __v: 0 }).populate('tenants').populate('property')
        } else {
            return Lease.find({ active: status }, { __v: 0 }).populate('tenants').populate('property')
        }        
    },

    retrieveLeaseEnding() {
        let timeStamp = new Date
        let nowPlusMonth = new Date(timeStamp.setMonth(timeStamp.getMonth() + 1))
        let now = new Date

        return Lease.find({ ending: { '$gte': now, '$lte': nowPlusMonth } }, { password: 0, __v: 0 }).populate('property')
    },

    removeLease(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                return Lease.findOne({ _id: id }).populate('property')
            })
            .then(lease => {
                if (!lease) {
                    throw Error('lease does not exist')
                } else if (lease.active) {                
                    return Property.findByIdAndUpdate(lease.property.id , {status: 'free'} )
                        .then(() => {
                            return Lease.deleteOne({ _id: id })
                        })
                }

                return Lease.deleteOne({ _id: id })
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
                if (tenant) {
                    return tenant._id
                } else {
                    return Tenant.create({ name, surname, documentId, active, email, phoneNumber, nationality })
                    .then((_tenant) =>_tenant._id )
                }                
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