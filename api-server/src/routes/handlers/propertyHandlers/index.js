const listProperty = require('./listProperty')
const registerProperty = require('./registerProperty')
const updateProperty = require('./updateProperty')
const removeProperty = require('./removeProperty')
const retrieveProperty = require('./retrieveProperty')
const retrievePropertyQuery = require('./retrievePropertyQuery')
const retrievePropertyByStatus = require('./retrievePropertyByStatus')
const retrievePropertyByFilters = require('./retrievePropertyByFilters')
const retrievePropertyByOwner = require('./retrievePropertyByOwner')

module.exports = {
    listProperty,
    registerProperty,
    updateProperty,
    removeProperty,
    retrieveProperty,
    retrievePropertyQuery,
    retrievePropertyByStatus,
    retrievePropertyByFilters,
    retrievePropertyByOwner
}
