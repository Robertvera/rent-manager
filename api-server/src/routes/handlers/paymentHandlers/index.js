const listPayment = require('./listPayment')
const registerPayment = require('./registerPayment')
const updatePayment = require('./updatePayment')
const removePayment = require('./removePayment')
const retrievePayment = require('./retrievePayment')
const retrievePaymentQuery = require('./retrievePaymentQuery')
const retrievePaymentByLeaseId = require('./retrievePaymentByLeaseId.js')

module.exports = {
    listPayment,
    registerPayment,
    updatePayment,
    removePayment,
    retrievePayment,
    retrievePaymentQuery,
    retrievePaymentByLeaseId
}
