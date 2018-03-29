const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { reference } } = req

    logic.retrieveProperty(reference)
        .then(property => res.json(success(property)))
        .catch(err => res.json(fail(err.message)))
}