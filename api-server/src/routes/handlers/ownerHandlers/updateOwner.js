const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { body: { name, surname, email, phoneNumber, nationality, bankAccount, password } } = req
    const { params: { documentId } } = req

    logic.updateOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount, password)
    
        .then(() => res.json(success()))
        .catch(err => res.json(fail(err.message)))
}