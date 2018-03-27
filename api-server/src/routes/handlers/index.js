const { listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery } = require('./tenantHandlers')
const { listProperty, registerProperty, updateProperty, removeProperty, retrieveProperty, retrievePropertyByOwner, retrievePropertyQuery, retrievePropertyByStatus, retrievePropertyByFilters } = require('./propertyHandlers')
const { listOwner, registerOwner, removeOwner, updateOwner, retrieveOwner, checkLoginOwner, retrieveOwnerQuery } = require('./ownerHandlers')
const { listPayment, registerPayment, removePayment, updatePayment, retrievePayment, retrievePaymentQuery, retrievePaymentByLeaseId, retrievePaymentByDate, retrievePaymentByProperty, retrievePaymentByStatus } = require('./paymentHandlers')
const { listLease, registerLease, removeLease, retrieveLease, retrieveLeaseQuery, retrieveCurrentLeaseByProperty, retrieveLeaseByProperty, updateLease, checkLeaseStatus, checkLogin, retrieveLeaseEnding, retrieveLeaseByStatus } = require('./leaseHandlers') 
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
    retrievePropertyByOwner,
    listOwner,
    registerOwner,
    checkLoginOwner,
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
    retrievePaymentByProperty,
    retrievePaymentByStatus,
    retrievePaymentByDate,
    listLease, 
    registerLease, 
    removeLease, 
    retrieveLease, 
    retrieveLeaseQuery, 
    retrieveLeaseByStatus,
    retrieveCurrentLeaseByProperty,
    retrieveLeaseByProperty,
    updateLease,
    checkLeaseStatus,
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