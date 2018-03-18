const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { _id } } = req

    logic.retrieveTransfer(_id)
        .then(transfer => res.json(success(transfer)))
        .catch(err => res.json(fail(err.message)))
}