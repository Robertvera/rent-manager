const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { concept, deductions, property, date, base }} = req
    logic.registerTransfer(concept, deductions, property, date, base)
        .then(transfer => res.json(success(transfer)))
        .catch(err => res.json(fail(err.message)))
}