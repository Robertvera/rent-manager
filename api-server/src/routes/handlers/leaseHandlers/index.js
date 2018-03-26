const listLease = require('./listLease')
const registerLease = require('./registerLease')
const updateLease = require('./updateLease')
const removeLease = require('./removeLease')
const retrieveLease = require('./retrieveLease')
const retrieveLeaseQuery = require('./retrieveLeaseQuery')
const checkLogin = require('./checkLogin')
const retrieveLeaseEnding = require('./retrieveLeaseEnding')
const retrieveLeaseByStatus = require('./retrieveLeaseByStatus')

module.exports = {
    listLease,
    registerLease,
    updateLease,
    removeLease,
    retrieveLease,
    retrieveLeaseQuery,
    checkLogin,
    retrieveLeaseEnding,
    retrieveLeaseByStatus
}
