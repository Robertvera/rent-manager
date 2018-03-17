const { Router } = require('express')
const bodyParser = require('body-parser')
const {listTenant, registerTenant, removeTenant, retrieveTenant, retrieveTenantQuery} = require('./handlers')

const router = Router()

router.get('/tenants', listTenant)

const jsonBodyParser = bodyParser.json()

router.post('/tenant', jsonBodyParser, registerTenant)

router.get('/tenant/:id', retrieveTenant)

router.get('/tenants/:query', retrieveTenantQuery)

router.delete('/tenant/:id', removeTenant)





module.exports = router