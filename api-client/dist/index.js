'use strict';

/**
 * Rent-manager API client.
 *
 * @version 1.0.0
 */

var axios = require('axios');

var rentManagerApi = {
    _url: function _url() {
        return this.protocol + '://' + this.host + ':' + this.port + '/api';
    },


    getTenants: function getTenants() {
        return axios.get(this._url() + '/tenants').then(function (data) {
            return data.data.data;
        });
    },
    createTenant: function createTenant(name, surname, documentId, active, email, phoneNumber, nationality) {
        return axios.post(this._url() + '/tenant', { name: name, surname: surname, documentId: documentId, active: active, email: email, phoneNumber: phoneNumber, nationality: nationality }).then(function (data) {
            return data.data.data;
        });
    },
    getOneTenant: function getOneTenant(id) {
        return axios.get(this._url() + '/tenant/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getTenantSearch: function getTenantSearch(query) {
        return axios.get(this._url() + '/tenants/' + query).then(function (data) {
            return data.data.data;
        });
    },
    deleteTenant: function deleteTenant(id) {
        return axios.delete(this._url() + '/tenant/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getOwners: function getOwners() {
        return axios.get(this._url() + '/owners').then(function (data) {
            return data.data.data;
        });
    },
    createOwner: function createOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return axios.post(this._url() + '/owner', { documentId: documentId, name: name, surname: surname, email: email, phoneNumber: phoneNumber, nationality: nationality, bankAccount: bankAccount }).then(function (data) {
            return data.data;
        });
    },
    updateOwner: function updateOwner(documentId, name, surname, email, phoneNumber, nationality, bankAccount) {
        return axios.put(this._url() + '/owner/' + documentId, { name: name, surname: surname, email: email, phoneNumber: phoneNumber, nationality: nationality, bankAccount: bankAccount }).then(function (data) {
            return data.data;
        });
    },
    checkLoginOwner: function checkLoginOwner(documentId, password) {
        return axios.put(this._url() + '/owner/login/' + documentId, { password: password });
    },
    getOneOwner: function getOneOwner(documentId) {
        return axios.get(this._url() + '/owner/' + documentId).then(function (data) {
            return data.data.data;
        });
    },
    getOwnerSearch: function getOwnerSearch(query) {
        return axios.get(this._url() + '/owners/' + query).then(function (data) {
            return data.data.data;
        });
    },
    deleteOwner: function deleteOwner(documentId) {
        return axios.delete(this._url() + '/owner/' + documentId).then(function (data) {
            return data.data.data;
        });
    },
    getProperties: function getProperties() {
        return axios.get(this._url() + '/properties').then(function (data) {
            return data.data.data;
        });
    },
    getPropertiesByStatus: function getPropertiesByStatus(status) {
        return axios.get(this._url() + '/properties-by-status/' + status).then(function (data) {
            return data.data.data;
        });
    },
    getPropertiesByOwner: function getPropertiesByOwner(id) {
        return axios.get(this._url() + '/properties-by-owner/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getPropertiesByFilter: function getPropertiesByFilter(status, hood) {
        return axios.get(this._url() + '/properties-by-filters/' + status + '&' + hood).then(function (data) {
            return data.data.data;
        });
    },
    createProperty: function createProperty(owner, reference, address, rooms, sqm, price, neighbourhood, picture, status) {
        return axios.post(this._url() + '/property', { owner: owner, reference: reference, address: address, rooms: rooms, sqm: sqm, price: price, neighbourhood: neighbourhood, picture: picture, status: status });
    },
    updateProperty: function updateProperty(reference, owner, address, rooms, sqm, price, neighbourhood, picture, status) {
        return axios.put(this._url() + '/property/' + reference, { owner: owner, address: address, rooms: rooms, sqm: sqm, price: price, neighbourhood: neighbourhood, picture: picture, status: status });
    },
    getOneProperty: function getOneProperty(reference) {
        return axios.get(this._url() + '/property/' + reference).then(function (data) {
            return data.data.data;
        });
    },
    getPropertySearch: function getPropertySearch(status, hood, query) {
        return axios.get(this._url() + '/properties/' + status + '&' + hood + '&' + query).then(function (data) {
            return data.data.data;
        });
    },
    deleteProperty: function deleteProperty(reference) {
        return axios.delete(this._url() + '/property/' + reference).then(function (data) {
            return data.data.data;
        });
    },
    getPayments: function getPayments() {
        return axios.get(this._url() + '/payments').then(function (data) {
            return data.data.data;
        });
    },
    createPayment: function createPayment(concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.post(this._url() + '/payment', { concept: concept, type: type, lease: lease, property: property, status: status, dueDate: dueDate, paymentDate: paymentDate, amount: amount }).then(function (data) {
            return data.data;
        });
    },
    updatePayment: function updatePayment(id, concept, type, lease, property, status, dueDate, paymentDate, amount) {
        return axios.put(this._url() + '/payment/' + id, { concept: concept, type: type, lease: lease, property: property, status: status, dueDate: dueDate, paymentDate: paymentDate, amount: amount }).then(function (data) {
            return data.data;
        });
    },
    getOnePayment: function getOnePayment(id) {
        return axios.get(this._url() + '/payment/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getPaymentsByLeaseId: function getPaymentsByLeaseId(id) {
        return axios.get(this._url() + '/payments-by-lease/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getPaymentsByProperty: function getPaymentsByProperty(id) {
        return axios.get(this._url() + '/payments-by-property/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getPaymentSearch: function getPaymentSearch(query) {
        return axios.get(this._url() + '/payments/' + query).then(function (data) {
            return data.data.data;
        });
    },
    getPaymentsByStatus: function getPaymentsByStatus(status) {
        return axios.get(this._url() + '/payments-by-status/' + status).then(function (data) {
            return data.data.data;
        });
    },
    getPaymentsByDate: function getPaymentsByDate(status, starting, ending) {
        return axios.get(this._url() + '/payments-by-date/' + status + '&' + starting + '&' + ending).then(function (data) {
            return data.data.data;
        });
    },
    deletePayment: function deletePayment(id) {
        return axios.delete(this._url() + '/payment/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getLeases: function getLeases() {
        return axios.get(this._url() + '/leases').then(function (data) {
            return data.data.data;
        });
    },
    createLease: function createLease(property, tenants, active, starting, ending, price, deposit) {
        return axios.post(this._url() + '/lease', { property: property, tenants: tenants, active: active, starting: starting, ending: ending, price: price, deposit: deposit }).then(function (data) {
            return data.data;
        });
    },
    updateLease: function updateLease(id, property, tenants, active, starting, ending, price, deposit) {
        return axios.put(this._url() + '/lease/' + id, { property: property, tenants: tenants, active: active, starting: starting, ending: ending, price: price, deposit: deposit }).then(function (data) {
            return data.data;
        });
    },
    getOneLease: function getOneLease(id) {
        return axios.get(this._url() + '/lease/' + id).then(function (data) {
            return data.data.data;
        });
    },
    checkLeaseStatus: function checkLeaseStatus(id) {
        return axios.put(this._url() + '/lease-check-status/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getLeaseSearch: function getLeaseSearch(status, query) {
        return axios.get(this._url() + '/leases/' + status + '&' + query).then(function (data) {
            return data.data.data;
        });
    },
    getLeasesByStatus: function getLeasesByStatus(status) {
        return axios.get(this._url() + '/leases-by-status/' + status).then(function (data) {
            return data.data.data;
        });
    },
    getLeasesEndingSoon: function getLeasesEndingSoon() {
        return axios.get(this._url() + '/leases-ending').then(function (data) {
            return data.data.data;
        });
    },
    getCurrentLeasesByProperty: function getCurrentLeasesByProperty(id) {
        return axios.get(this._url() + '/current-leases-by-property/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getLeasesByProperty: function getLeasesByProperty(id) {
        return axios.get(this._url() + '/leases-by-property/' + id).then(function (data) {
            return data.data.data;
        });
    },
    deleteLease: function deleteLease(id) {
        return axios.delete(this._url() + '/lease/' + id).then(function (data) {
            return data.data.data;
        });
    },
    checkLogin: function checkLogin(id, password) {
        return axios.put(this._url() + '/lease/login/' + id, { password: password });
    },
    getTransfers: function getTransfers() {
        return axios.get(this._url() + '/transfers').then(function (data) {
            return data.data.data;
        });
    },
    createTransfer: function createTransfer(concept, deductions, property, date, base) {
        return axios.post(this._url() + '/transfer', { concept: concept, deductions: deductions, property: property, date: date, base: base }).then(function (data) {
            return data.data.data;
        });
    },
    updateTransfer: function updateTransfer(id, concept, deductions, property, date, base) {
        return axios.put(this._url() + '/transfer/' + id, { concept: concept, deductions: deductions, property: property, date: date, base: base }).then(function (data) {
            return data.data.data;
        });
    },
    getOneTransfer: function getOneTransfer(id) {
        return axios.get(this._url() + '/transfer/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getTransferSearch: function getTransferSearch(query) {
        return axios.get(this._url() + '/transfers/' + query).then(function (data) {
            return data.data.data;
        });
    },
    deleteTransfer: function deleteTransfer(id) {
        return axios.delete(this._url() + '/transfer/' + id).then(function (data) {
            return data.data.data;
        });
    },
    getDeductions: function getDeductions() {
        return axios.get(this._url() + '/deductions').then(function (data) {
            return data.data.data;
        });
    },
    createDeduction: function createDeduction(concept, amount) {
        return axios.post(this._url() + '/deduction', { concept: concept, amount: amount }).then(function (data) {
            return data.data.data;
        });
    },
    getOneDeduction: function getOneDeduction(id) {
        return axios.get(this._url() + '/deduction/' + id).then(function (data) {
            return data.data.data;
        });
    }
};

module.exports = rentManagerApi;
