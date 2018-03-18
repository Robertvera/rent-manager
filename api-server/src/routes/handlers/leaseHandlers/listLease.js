const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listLease()
        .then(lease => res.json(success(lease)))
        .catch(err => res.json(fail(err.message)))
}