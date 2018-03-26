const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { status, starting, ending } } = req

    logic.retrievePaymentByDate(status, starting, ending)
        .then(payment => res.json(success(payment)))
        .catch(err => res.json(fail(err.message)))
}