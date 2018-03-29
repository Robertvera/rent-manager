const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listPayment()
        .then(payments => res.json(success(payments)))
        .catch(err => res.json(fail(err.message)))
}