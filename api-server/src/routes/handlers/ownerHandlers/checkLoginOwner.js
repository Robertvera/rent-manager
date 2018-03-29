const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { documentId }} = req
    const { body: { password }} = req
    logic.checkLoginOwner(documentId, password)
        .then(lease => res.json(success(lease)))
        .catch(err => res.json(fail(err.message)))
}