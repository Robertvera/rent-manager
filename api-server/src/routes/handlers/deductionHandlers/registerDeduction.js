const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { concept, amount }} = req
    logic.registerDeduction(concept, amount)
        .then(deduction => res.json(success(deduction)))
        .catch(err => res.json(fail(err.message)))
}