const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    logic.removePayment(id)
        .then(payment => res.json(success(payment)))
        .catch(err => res.json(fail(err.message)))
}