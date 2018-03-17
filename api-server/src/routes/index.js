const { Router } = require('express')
const bodyParser = require('body-parser')
const {listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery, listProperty, registerProperty, removeProperty, retrieveProperty, retrievePropertyQuery, listOwner, registerOwner, removeOwner, retrieveOwner, retrieveOwnerQuery} = require('./handlers')

const router = Router()

router.get('/tenants', listTenant)

const jsonBodyParser = bodyParser.json()

router.post('/tenant', jsonBodyParser, registerTenant)

router.get('/tenant/:id', retrieveTenant)

router.get('/tenants/:query', retrieveTenantQuery)

router.delete('/tenant/:id', removeTenant)

router.get('/properties', listProperty)





module.exports = router