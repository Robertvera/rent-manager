const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listTransfer()
        .then(transfers => res.json(success(transfers)))
        .catch(err => res.json(fail(err.message)))
}