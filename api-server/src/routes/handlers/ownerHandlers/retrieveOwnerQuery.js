const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.retrieveOwnerQuery(query)
        .then(owner => res.json(success(owner)))
        .catch(err => res.json(fail(err.message)))
}