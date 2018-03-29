const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { _id } } = req

    logic.retrieveDeduction(_id)
        .then(deduction => res.json(success(deduction)))
        .catch(err => res.json(fail(err.message)))
}