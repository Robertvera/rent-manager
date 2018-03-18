const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.retrieveTransferQuery(query)
        .then(transfer => res.json(success(transfer)))
        .catch(err => res.json(fail(err.message)))
}