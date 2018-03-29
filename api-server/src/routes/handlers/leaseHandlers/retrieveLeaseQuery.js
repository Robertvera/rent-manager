const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { status, query } } = req

    logic.retrieveLeaseQuery(status, query)
        .then(lease => res.json(success(lease)))
        .catch(err => res.json(fail(err.message)))
}