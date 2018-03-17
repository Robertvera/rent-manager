const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.retrieveTenantQuery(query)
        .then(tenant => res.json(success(tenant)))
        .catch(err => res.json(fail(err.message)))
}