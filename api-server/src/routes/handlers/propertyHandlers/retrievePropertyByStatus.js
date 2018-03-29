const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { status } } = req

    logic.retrievePropertyByStatus(status)
        .then(property => res.json(success(property)))
        .catch(err => res.json(fail(err.message)))
}