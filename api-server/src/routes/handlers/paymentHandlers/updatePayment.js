const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { concept, type, lease, property, status, dueDate, paymentDate, amount } } = req
    const { params: { id } } = req

    logic.updatePayment(id, concept, type, lease, property, status, dueDate, paymentDate, amount)
    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}