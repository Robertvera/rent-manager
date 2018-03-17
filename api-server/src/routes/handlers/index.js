const { listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery } = require('./tenantHandlers')
const { listProperty, registerProperty, removeProperty, retrieveProperty, retrievePropertyQuery } = require('./propertyHandlers')
const { listOwner, registerOwner, removeOwner, retrieveOwner, retrieveOwnerQuery } = require('./ownerHandlers')

module.exports = {
    listTenant,
    registerTenant,
    removeTenant,
    retrieveTenant,
    retrieveTenantQuery,
    listProperty,
    registerProperty,
    removeProperty,
    retrieveProperty,
    retrievePropertyQuery,
    listOwner,
    registerOwner,
    removeOwner,
    retrieveOwner,
    retrieveOwnerQuery
}