const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { owner, reference, address, rooms, sqm, price, neighbourhood, picture, status }} = req
    logic.registerProperty(owner, reference, address, rooms, sqm, price, neighbourhood, picture, status)
        .then(tenants => res.json(success(tenants)))
        .catch(err => res.json(fail(err.message)))
}