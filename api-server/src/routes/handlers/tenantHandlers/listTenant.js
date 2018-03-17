const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listTenant()
        .then(tenants => res.json(success(tenants)))
        .catch(err => res.json(fail(err.message)))
}