const listTenant = require('./listTenant')
const registerTenant = require('./registerTenant')
const removeTenant = require('./removeTenant')
const retrieveTenant = require('./retrieveTenant')
const retrieveTenantQuery = require('./retrieveTenantQuery')
//...

module.exports = {
    listTenant,
    registerTenant,
    removeTenant,
    retrieveTenant,
    retrieveTenantQuery
}