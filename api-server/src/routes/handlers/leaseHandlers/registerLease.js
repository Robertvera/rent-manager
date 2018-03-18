const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { property, tenants, password, active, starting, ending, price, deposit }} = req
    logic.registerLease(property, tenants, password, active, starting, ending, price, deposit)
        .then(lease => res.json(success(lease)))
        .catch(err => res.json(fail(err.message)))
}