const listOwner = require('./listOwner')
const registerOwner = require('./registerOwner')
const removeOwner = require('./removeOwner')
const retrieveOwner = require('./retrieveOwner')
const retrieveOwnerQuery = require('./retrieveOwnerQuery')
const updateOwner = require('./updateOwner')
const checkLoginOwner = require('./checkLoginOwner')
//...

module.exports = {
    listOwner,
    registerOwner,
    removeOwner,
    updateOwner,
    retrieveOwner,
    retrieveOwnerQuery,
    checkLoginOwner
}