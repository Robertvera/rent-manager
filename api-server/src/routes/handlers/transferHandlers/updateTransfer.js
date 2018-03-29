const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { concept, deductions, property, date, base } } = req
    const { params: { _id } } = req

    logic.updateTransfer(_id, concept, deductions, property, date, base)
    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}