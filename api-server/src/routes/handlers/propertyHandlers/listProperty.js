const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    logic.listProperty()
        .then(properties => res.json(success(properties)))
        .catch(err => res.json(fail(err.message)))
}