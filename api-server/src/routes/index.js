const { Router } = require('express')
const bodyParser = require('body-parser')
const {listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery, listProperty, registerProperty, updateProperty, removeProperty, retrieveProperty, retrievePropertyQuery, listOwner, registerOwner, removeOwner, updateOwner, retrieveOwner, retrieveOwnerQuery, listPayment, registerPayment, removePayment, retrievePayment, retrievePaymentQuery, retrievePaymentByLeaseId, updatePayment, listLease, registerLease,updateLease, retrieveLease, retrieveLeaseQuery, removeLease, listTransfer, registerTransfer, removeTransfer, retrieveTransfer, retrieveTransferQuery, updateTransfer, listDeduction, registerDeduction, retrieveDeduction, checkLogin, retrievePaymentByStatus, retrievePropertyByStatus, retrieveLeaseEnding } = require('./handlers')

const router = Router()

const jsonBodyParser = bodyParser.json()

// TENANT ROUTES

router.get('/tenants', listTenant)

router.post('/tenant', jsonBodyParser, registerTenant)

router.get('/tenant/:id', retrieveTenant)

router.get('/tenants/:query', retrieveTenantQuery)

router.delete('/tenant/:id', removeTenant)

// OWNER ROUTES

router.get('/owners', listOwner)

router.post('/owner', jsonBodyParser, registerOwner)

router.put('/owner/:documentId', jsonBodyParser, updateOwner)

router.get('/owner/:documentId', retrieveOwner)

router.get('/owners/:query', retrieveOwnerQuery)

router.delete('/owner/:documentId', removeOwner)

// PROPERTY ROUTES

router.get('/properties', listProperty)

router.post('/property', jsonBodyParser, registerProperty)

router.put('/property/:reference', jsonBodyParser, updateProperty)

router.get('/property/:reference', retrieveProperty)

router.get('/properties/:query', retrievePropertyQuery)

router.get('/properties-by-status/:status', retrievePropertyByStatus)

router.delete('/property/:reference', removeProperty)

// PAYMENT ROUTES

router.get('/payments', listPayment)

router.post('/payment', jsonBodyParser, registerPayment)

router.put('/payment/:id', jsonBodyParser, updatePayment)

router.get('/payment/:id', retrievePayment)

router.get('/payments/:query', retrievePaymentQuery)

router.get('/payments-by-lease/:leaseId', retrievePaymentByLeaseId)

router.delete('/payment/:id', removePayment)

router.get('/payments-by-status/:status', retrievePaymentByStatus)

// LEASE ROUTES

router.get('/leases', listLease)

router.post('/lease', jsonBodyParser, registerLease)

router.put('/lease/:id', jsonBodyParser, updateLease)

router.get('/lease/:id', retrieveLease)

router.get('/leases/:id', retrieveLeaseQuery)

router.delete('/lease/:id', removeLease)

router.put('/lease/login/:id', jsonBodyParser, checkLogin)

router.get('/leases-ending', retrieveLeaseEnding)

// TRANSFER ROUTES

router.get('/transfers', listTransfer)

router.post('/transfer', jsonBodyParser, registerTransfer)

router.put('/transfer/:_id', jsonBodyParser, updateTransfer)

router.get('/transfer/:_id', retrieveTransfer)

router.get('/transfers/:query', retrieveTransferQuery)

router.delete('/transfer/:_id', removeTransfer)

// DEDUCTIONS ROUTES

router.get('/deductions', listDeduction)

router.post('/deduction', jsonBodyParser, registerDeduction)

router.get('/deduction/:_id', retrieveDeduction)


module.exports = router