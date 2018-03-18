const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    logic.removeLease(id)
        .then(lease => res.json(success(lease)))
        .catch(err => res.json(fail(err.message)))
}