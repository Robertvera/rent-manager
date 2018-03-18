const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { concept, type, lease, property, status, dueDate, paymentDate, amount }} = req
    logic.registerPayment(concept, type, lease, property, status, dueDate, paymentDate, amount)
        .then(payment => res.json(success(payment)))
        .catch(err => res.json(fail(err.message)))
}