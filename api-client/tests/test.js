require ('dotenv').config()

const api_client = require('../src/index')
const assert = require('assert')
const expect = require('chai').expect

api_client.port = "5000"
api_client.host = "localhost"
api_client.protocol = "http"

describe('owners methods', ()=> {

    const documentId = '82734873'
    const name = 'name'
    const surname = 'surname'
    const email = 'email@email.com'
    const phoneNumber = '30948092384'
    const nationality = 'nationality'
    const bankAccount = '3409283409238'



    it('should create an owner', done => {
        api_client.createOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount)
            .then(res => {
                assert(res.status)
                // assert(res.data, 'should response with mongo _id')
                
                done()
            })
            .catch(done)
    })
})