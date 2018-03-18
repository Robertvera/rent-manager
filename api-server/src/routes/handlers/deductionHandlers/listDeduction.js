const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listDeduction()
        .then(deductions => res.json(success(deductions)))
        .catch(err => res.json(fail(err.message)))
}