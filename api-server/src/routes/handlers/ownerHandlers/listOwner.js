const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listOwner()
        .then(owners => res.json(success(owners)))
        .catch(err => res.json(fail(err.message)))
}