const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, documentId, active, email, phoneNumber, nationality}} = req
    logic.registerTenant(name, surname, documentId, active, email, phoneNumber, nationality)
        .then(tenants => res.json(success(tenants)))
        .catch(err => res.json(fail(err.message)))
}