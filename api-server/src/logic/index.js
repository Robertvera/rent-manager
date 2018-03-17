const { Lease } = require('../models/index')
const { Property } = require('../models/index')
const { Tenant } = require('../models/index')
const validate = require('./validate')
const uuid = require('uuid/v4')

module.exports = {
    registerLease(property, tenants, password, active, starting, ending, price, deposit) {
        return Promise.resolve()
            .then(() => {
                return Property.findOne({ property })
            })
            .then(property => {
                if (property.status != 'free') throw Error('the property you selected already has an active lease')

                const id = uuid()

                return Lease.create({ property, id, tenants, password, active, starting, ending, price, deposit })
                    .then(() => id)
            })
    },

    listLease() {
        return Lease.find({}, { _id: 0, property: 1, id: 1, tenants: 1, active: 1, starting: 1, ending: 1, price: 1, deposit: 1 })
    },

    updateLease(id, property, tenants, active, starting, ending, price, deposit, newProperty, newTenants, newActive, newStarting, newEnding, newPrice, newDeposit) {
        return Promise.resolve()
            .then(() => {
                validate({ id, property, tenants, active, starting, ending, price, deposit })

                return Property.findOne({ property: newProperty })
            })
            .then(property => {
                if (property.status != 'free') throw Error('the property you selected already has an active lease')

                return Lease.updateOne({id}, {property: newProperty, tenants: newTenants, active: newActive, starting: newStarting, ending: newEnding, price: newPrice, deposit: newDeposit})
            })            
    },

    retrieveLease(id) {
        return Promise.resolve()
            .then(() => {
                validate({ id })

                //return User.findOne({ id }, 'id name surname email username') // WARN! it returns _id too!
                return Lease.findOne({ id }, { _id: 0, password: 0 })
            })
            .then(lease => {
                if (!lease) throw Error('lease does not exist')

                return lease
            })
    },

    retrieveLeaseQuery(query) {        
        return Lease.find({$or:[{property: new RegExp(query, 'i')},{id: new RegExp(query, 'i')},{tenants: new RegExp(query, 'i')},{price:new RegExp(query, 'i')},{deposit:new RegExp(query, 'i')}]}, { _id: 0, password: 0, __v:0 })        
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
        return Tenant.find({$or:[{name: new RegExp(query, 'i')},{surname: new RegExp(query, 'i')},{documentId: new RegExp(query, 'i')},{email:new RegExp(query, 'i')}, {phoneNumber:new RegExp(query, 'i')}]}, { _id: 0, password: 0, __v:0 })        
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