/**
 * Rent-manager API client.
 *
 * @version 1.0.0
 */

const axios = require('axios');

const usersApi = {
    _url() {
        return `${this.protocol}://${this.host}:${this.port}/api`
    },
    
    getTenants: function () {
        return axios.get(`${this._url()}/tenants`)
    },
    createTenant: function(name, surname, documentId, active, email, phoneNumber, nationality) {
        return axios.post(`${this._url()}/tenant`, {name, surname, documentId, active, email, phoneNumber, nationality})
    },
    getOneTenant: function (id) {
        return axios.get(`${this._url()}/tenant/${id}`)
    },
    getTenantSearch: function (query) {
        return axios.get(`${this._url()}/tenants/${query}`)
    },
    deleteTenant: function(id) {
        return axios.delete(`${this._url()}/tenant/${id}`)
    },
    getOwners: function() {
        return axios.get(`${this._url()}/owners`)
    },
    createOwner: function(documentId, name, surname, email, phoneNumber, nationality, bankAccount, password) {
        return axios.post(`${this._url()}/owner`, {documentId, name, surname, email, phoneNumber, nationality, bankAccount, password})
    },
    updateOwner: function(documentId, name, surname, email, phoneNumber, nationality, bankAccount, password) {
        return axios.put(`${this._url()}/owner/${documentId}`, {name, surname, email, phoneNumber, nationality, bankAccount, password})
    },
    getOneOwner: function(documentId) {
        return axios.get(`${this._url()}/owner/${documentId}`)
    },
    getOwnerSearch: function (query) {
        return axios.get(`${this._url()}/owners/${query}`)
    },
    deleteOwner: function(documentId) {
        return axios.delete(`${this._url()}/owner/${documentId}`)
    },
    getProperties: function() {
        return axios.get(`${this._url()}/properties`)
    },
    createProperty: function(owner, reference, address, rooms, sqm, neighbourhood, picture, status) {
        return axios.post(`${this._url()}/property`, {owner, reference, address, rooms, sqm, neighbourhood, picture, status})
    },
    updateProperty: function(reference, owner, address, rooms, sqm, neighbourhood, picture, status) {
        return axios.put(`${this._url()}/property/${reference}`, {owner, address, rooms, sqm, neighbourhood, picture, status})
    },
    getOneProperty: function(reference) {
        return axios.get(`${this._url()}/property/${reference}`)
    },
    getPropertySearch: function(query) {    
        return axios.get(`${this._url()}/properties/${query}`)
    },
    deleteProperty: function(reference) {
        return axios.delete(`${this._url()}/property/${reference}`)
    },
    getPayments: function() {
        return axios.get(`${this._url()}/payments`)
    },
    createPayment: function(concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.post(`${this._url()}/payment`, {concept, type, lease, property, status, dueDate, paymentDate, amount})
    },
    updatePayment: function(id, concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.put(`${this._url()}/payment/${id}`, {concept, type, lease, property, status, dueDate, paymentDate, amount})
    },
    getOnePayment: function(id) {
        return axios.get(`${this._url()}/payment/${id}`)
    },
    getPaymentSearch: function(query) {
        return axios.get(`${this._url()}/payments/${query}`)
    },
    deletePayment: function(id){
        return axios.delete(`${this._url()}/payment/${id}`)
    },
    getLeases: function() {
        return axios.get(`${this._url()}/leases`)
    },
    createLease: function(property, tenants, password, active, starting, ending, price, deposit) {
        return axios.post(`${this._url()}/lease`, {property, tenants, password, active, starting, ending, price, deposit})
    },
    updateLease: function(id, property, tenants, password, active, starting, ending, price, deposit) {
        return axios.put(`${this._url()}/lease/${id}`, {property, tenants, password, active, starting, ending, price, deposit})
    },
    getOneLease: function(id) {
        return axios.get(`${this._url()}/lease/${id}`)
    },
    getLeaseSearch: function(query) {
        return axios.get(`${this._url()}/leases/${query}`)
    },
    deleteLease: function (id) {
        return axios.delete(`${this._url()}/lease/${id}`)
    },
    getTransfers: function() {
        return axios.get(`${this._url()}/transfers`)
    },
    createTransfer: function(concept, deductions, property, date, base) {
        return axios.post(`${this._url()}/transfer`, {concept, deductions, property, date, base})
    },
    updateTransfer: function(id, concept, deductions, property, date, base) {
        return axios.put(`${this._url()}/transfer/${id}`, {concept, deductions, property, date, base})
    },
    getOneTransfer: function(id) {
        return axios.get(`${this._url()}/transfer/${id}`)
    },
    getTransferSearch: function(query) {
        return axios.get(`${this._url()}/transfers/${query}`)
    },
    deleteTransfer: function(id) {
        return axios.delete(`${this._url()}/transfer/${id}`)
    },
    getDeductions: function() {
        return axios.get(`${this._url()}/deductions`)
    },
    createDeduction: function (concept, amount) {
        return axios.post(`${this._url()}/deduction`, {concept, amount})
    },
    getOneDeduction: function(id) {
        return axios.get(`${this._url()}/deduction/${id}`)
    }    
}

module.exports = rentManagerApi