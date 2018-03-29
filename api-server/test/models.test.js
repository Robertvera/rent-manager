const mongoose = require('mongoose')
const assert = require('assert')
const { Tenant, Lease, Property, Owner, Payment, Transfer, Deduction } = require('../src/models')


describe('models', () => {
    before(() => {
        return mongoose.connect('mongodb://robert:admin123@ds111319.mlab.com:11319/tests-rent-manager')
    })

    describe('create a lease', () => {
        let property, lease, tenant, tenant2, owner

        before(() => {
            owner = new Owner({
                documentId: 'documentId-owner',
                name: 'name',
                surname: 'surname',
                password: 'password'
            })

            property = new Property({
                owner: owner._id,
                reference: 'reference',
                address: 'address',
                rooms: 3,
                sqm: 56,
                neighbourhood: 'Barceloneta',
                status: 'free'
            })

            tenant = new Tenant({
                name: 'name',
                surname: 'surname',
                documentId: 'documentId-tenant',
                active: true
            })

            tenant2 = new Tenant({
                name: 'name',
                surname: 'surname',
                documentId: 'documentId-tenant2',
                active: true
            })

            lease = new Lease({
                property: property._id,
                tenants: [
                    tenant._id,
                    tenant2._id
                ],
                id: 'leaseID',
                password: 'password',
                active: true,
                starting: new Date,
                ending: new Date,
                price: 1000,
                deposit: 2000
            })

            return Promise.all([
                owner.save().then(_owner => owner = _owner),
                property.save().then(_property => property = _property),
                tenant.save().then(_tenant => tenant = _tenant),
                tenant2.save().then(_tenant2 => tenant2 = _tenant2),
                lease.save().then(_lease => lease = _lease)
            ])
                .then(() => {
                    const id = lease._id.toString()

                    return Lease.findOne({ _id: id }).then(_lease => lease = _lease)
                })
        })

        it('should create a lease', () => {
            assert(owner, 'should owner been created')

            assert(property, 'should property been created')

            assert(tenant, 'should tenant be created')

            assert(tenant2, 'should tenant 2 be created')

            assert(lease, 'should lease be created')

            assert(property.owner, 'should property have owner')

            assert(lease.tenants, 'should lease have tenants')

            assert.equal(lease.tenants.length, 2, 'should lease have 2 tenants')

            const [ tenant_id, tenant_id2 ] = lease.tenants

            assert.equal(tenant_id.toString(), tenant._id.toString(), 'should tenant match')

            assert.equal(tenant_id2.toString(), tenant2._id.toString(), 'should tenant match')
        })
    })

    after(done => {
        return mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done)
        })
    })
})