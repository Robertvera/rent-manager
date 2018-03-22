const { listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery } = require('./tenantHandlers')
const { listProperty, registerProperty, updateProperty, removeProperty, retrieveProperty, retrievePropertyQuery, retrievePropertyByStatus, retrievePropertyByFilters } = require('./propertyHandlers')
const { listOwner, registerOwner, removeOwner, updateOwner, retrieveOwner, retrieveOwnerQuery } = require('./ownerHandlers')
const { listPayment, registerPayment, removePayment, updatePayment, retrievePayment, retrievePaymentQuery, retrievePaymentByLeaseId, retrievePaymentByStatus } = require('./paymentHandlers')
const { listLease, registerLease, removeLease, retrieveLease, retrieveLeaseQuery, updateLease, checkLogin, retrieveLeaseEnding } = require('./leaseHandlers') 
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
    retrievePropertyByStatus,
    retrievePropertyByFilters,
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
    retrievePaymentByLeaseId,
    retrievePaymentByStatus,
    listLease, 
    registerLease, 
    removeLease, 
    retrieveLease, 
    retrieveLeaseQuery, 
    updateLease,
    checkLogin,
    retrieveLeaseEnding,
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