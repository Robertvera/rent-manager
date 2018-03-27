/**
 * Rent-manager API client.
 *
 * @version 1.0.0
 */

const axios = require('axios');

const rentManagerApi = {
    _url() {
        return `${this.protocol}://${this.host}:${this.port}/api`
    },
    
    getTenants: function () {
        return axios.get(`${this._url()}/tenants`).then(data => data.data.data)
    },
    createTenant: function(name, surname, documentId, active, email, phoneNumber, nationality) {
        return axios.post(`${this._url()}/tenant`, {name, surname, documentId, active, email, phoneNumber, nationality}).then(data => data.data.data)
    },
    getOneTenant: function (id) {
        return axios.get(`${this._url()}/tenant/${id}`).then(data => data.data.data)
    },
    getTenantSearch: function (query) {
        return axios.get(`${this._url()}/tenants/${query}`).then(data => data.data.data)
    },
    deleteTenant: function(id) {
        return axios.delete(`${this._url()}/tenant/${id}`).then(data => data.data.data)
    },
    getOwners: function() {
        return axios.get(`${this._url()}/owners`).then(data => data.data.data)
    },
    createOwner: function(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return axios.post(`${this._url()}/owner`, {documentId, name, surname, email, phoneNumber, nationality, bankAccount}).then(data => data.data)
    },
    updateOwner: function(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return axios.put(`${this._url()}/owner/${documentId}`, {name, surname, email, phoneNumber, nationality, bankAccount}).then(data => data.data)
    },
    checkLoginOwner: function (documentId, password) {
        return axios.put(`${this._url()}/owner/login/${documentId}`, {password})
    },
    getOneOwner: function(documentId) {
        return axios.get(`${this._url()}/owner/${documentId}`).then(data => data.data.data)
    },
    getOwnerSearch: function (query) {
        return axios.get(`${this._url()}/owners/${query}`).then(data => data.data.data)
    },
    deleteOwner: function(documentId) {
        return axios.delete(`${this._url()}/owner/${documentId}`).then(data => data.data.data)
    },
    getProperties: function() {
        return axios.get(`${this._url()}/properties`).then(data => data.data.data)
    },
    getPropertiesByStatus: function(status) {
        return axios.get(`${this._url()}/properties-by-status/${status}`).then(data => data.data.data)
    },
    getPropertiesByOwner: function(id) {
        return axios.get(`${this._url()}/properties-by-owner/${id}`).then(data => data.data.data)
    },
    getPropertiesByFilter: function(status, hood) {
        return axios.get(`${this._url()}/properties-by-filters/${status}&${hood}`).then(data => data.data.data)
    },
    createProperty: function(owner, reference, address, rooms, sqm, price, neighbourhood, picture, status) {
        return axios.post(`${this._url()}/property`, {owner, reference, address, rooms, sqm, price, neighbourhood, picture, status})
    },
    updateProperty: function(reference, owner, address, rooms, sqm, price, neighbourhood, picture, status) {
        return axios.put(`${this._url()}/property/${reference}`, {owner, address, rooms, sqm, price, neighbourhood, picture, status})
    },
    getOneProperty: function(reference) {
        return axios.get(`${this._url()}/property/${reference}`).then(data => data.data.data)
    },
    getPropertySearch: function(status, hood, query) {    
        return axios.get(`${this._url()}/properties/${status}&${hood}&${query}`).then(data => data.data.data)
    },
    deleteProperty: function(reference) {
        return axios.delete(`${this._url()}/property/${reference}`).then(data => data.data.data)
    },
    getPayments: function() {
        return axios.get(`${this._url()}/payments`).then(data => data.data.data)
    },
    createPayment: function(concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.post(`${this._url()}/payment`, {concept, type, lease, property, status, dueDate, paymentDate, amount}).then(data => data.data)
    },
    updatePayment: function(id, concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.put(`${this._url()}/payment/${id}`, {concept, type, lease, property, status, dueDate, paymentDate, amount}).then(data => data.data)
    },
    getOnePayment: function(id) {
        return axios.get(`${this._url()}/payment/${id}`).then(data => data.data.data)
    },
    getPaymentsByLeaseId: function(id) {
        return axios.get(`${this._url()}/payments-by-lease/${id}`).then(data=>data.data.data)
    },
    getPaymentsByProperty: function(id) {
        return axios.get(`${this._url()}/payments-by-property/${id}`).then(data=>data.data.data)
    },
    getPaymentSearch: function(query) {
        return axios.get(`${this._url()}/payments/${query}`).then(data => data.data.data)
    },
    getPaymentsByStatus: function(status) {
        return axios.get(`${this._url()}/payments-by-status/${status}`).then(data => data.data.data)
    },
    getPaymentsByDate: function(status, starting, ending) {
        return axios.get(`${this._url()}/payments-by-date/${status}&${starting}&${ending}`).then(data => data.data.data)
    },
    deletePayment: function(id){
        return axios.delete(`${this._url()}/payment/${id}`).then(data => data.data.data)
    },
    getLeases: function() {
        return axios.get(`${this._url()}/leases`).then(data => data.data.data)
    },
    createLease: function(property, tenants, active, starting, ending, price, deposit) {
        return axios.post(`${this._url()}/lease`, {property, tenants, active, starting, ending, price, deposit}).then(data => data.data)
    },
    updateLease: function(id, property, tenants, active, starting, ending, price, deposit) {
        return axios.put(`${this._url()}/lease/${id}`, {property, tenants, active, starting, ending, price, deposit}).then(data => data.data)
    },
    getOneLease: function(id) {
        return axios.get(`${this._url()}/lease/${id}`).then(data => data.data.data)
    },
    checkLeaseStatus: function(id) {
        return axios.put(`${this._url()}/lease-check-status/${id}`).then(data => data.data.data)
    },
    getLeaseSearch: function(status, query) {
        return axios.get(`${this._url()}/leases/${status}&${query}`).then(data => data.data.data)
    },
    getLeasesByStatus: function(status) {
        return axios.get(`${this._url()}/leases-by-status/${status}`).then(data => data.data.data)
    },
    getLeasesEndingSoon: function() {
        return axios.get(`${this._url()}/leases-ending`).then(data => data.data.data)
    },
    getCurrentLeasesByProperty: function(id) {
        return axios.get(`${this._url()}/current-leases-by-property/${id}`).then(data => data.data.data)
    },
    getLeasesByProperty: function(id) {
        return axios.get(`${this._url()}/leases-by-property/${id}`).then(data => data.data.data)
    },
    deleteLease: function (id) {
        return axios.delete(`${this._url()}/lease/${id}`).then(data => data.data.data)
    },
    checkLogin: function (id, password) {
        return axios.put(`${this._url()}/lease/login/${id}`, {password})
    },
    getTransfers: function() {
        return axios.get(`${this._url()}/transfers`).then(data => data.data.data)
    },
    createTransfer: function(concept, deductions, property, date, base) {
        return axios.post(`${this._url()}/transfer`, {concept, deductions, property, date, base}).then(data => data.data.data)
    },
    updateTransfer: function(id, concept, deductions, property, date, base) {
        return axios.put(`${this._url()}/transfer/${id}`, {concept, deductions, property, date, base}).then(data => data.data.data)
    },
    getOneTransfer: function(id) {
        return axios.get(`${this._url()}/transfer/${id}`).then(data => data.data.data)
    },
    getTransferSearch: function(query) {
        return axios.get(`${this._url()}/transfers/${query}`).then(data => data.data.data)
    },
    deleteTransfer: function(id) {
        return axios.delete(`${this._url()}/transfer/${id}`).then(data => data.data.data)
    },
    getDeductions: function() {
        return axios.get(`${this._url()}/deductions`).then(data => data.data.data)
    },
    createDeduction: function (concept, amount) {
        return axios.post(`${this._url()}/deduction`, {concept, amount}).then(data => data.data.data)
    },
    getOneDeduction: function(id) {
        return axios.get(`${this._url()}/deduction/${id}`).then(data => data.data.data)
    }    
}

module.exports = rentManagerApi