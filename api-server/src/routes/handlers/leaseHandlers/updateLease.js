const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { property, tenants, password, active, starting, ending, price, deposit } } = req
    const { params: { id } } = req

    logic.updateLease(id, property, tenants, password, active, starting, ending, price, deposit)
    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}