const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { owner, address, rooms, sqm, price, neighbourhood, picture, status } } = req
    const { params: { reference } } = req

    logic.updateProperty(reference, owner, address, rooms, sqm, price, neighbourhood, picture, status)
    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}