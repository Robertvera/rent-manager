const { listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery } = require('./tenantHandlers')
const { listProperty, registerProperty, updateProperty, removeProperty, retrieveProperty, retrievePropertyQuery } = require('./propertyHandlers')
const { listOwner, registerOwner, removeOwner, updateOwner, retrieveOwner, retrieveOwnerQuery } = require('./ownerHandlers')
const { listPayment, registerPayment, removePayment, updatePayment, retrievePayment, retrievePaymentQuery } = require('./paymentHandlers')
const { listLease, registerLease, removeLease, retrieveLease, retrieveLeaseQuery, updateLease, checkLogin } = require('./leaseHandlers') 
const { listTransfer, registerTransfer, removeTransfer, retrieveTransfer, retrieveTransferQuery, updateTransfer } = require('./transferHandlers') 
const { listDeduction, registerDeduction, retrieveDeduction } = require('./deductionHandlers')


module.exports = {
    listTenant,
    registerTenant,
    removeTenant,
    retrieveTenant,
    retrieveTenantQuery,
    listProperty,
    registerProperty,
    updateProperty,
    removeProperty,
    retrieveProperty,
    retrievePropertyQuery,
    listOwner,
    registerOwner,
    removeOwner,
    updateOwner,
    retrieveOwner,
    retrieveOwnerQuery,
    listPayment, 
    registerPayment, 
    removePayment, 
    updatePayment, 
    retrievePayment, 
    retrievePaymentQuery,
    listLease, 
    registerLease, 
    removeLease, 
    retrieveLease, 
    retrieveLeaseQuery, 
    updateLease,
    checkLogin,
    listTransfer,
    registerTransfer,
    removeTransfer,
    retrieveTransfer,
    retrieveTransferQuery,
    updateTransfer,
    listDeduction,
    registerDeduction, 
    retrieveDeduction
}