import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import rentManagerApi from './api/api-client'

import Home from './components/Home/home'
import NavBar from './components/NavBar/navbar'
import SideBar from './components/SideBar/sidebar'
import TenantOverview from './components/Tenant/TenantOverview/tenant-overview'
import TenantPayments from './components/Tenant/TenantPayments/tenant-payments'
import TenantCheckout from './components/Tenant/TenantCheckout/tenant-checkout'
import AdminDashboard from './components/Admin/AdminDashboard/admin-dashboard'
import AdminProperties from './components/Admin/AdminProperties/admin-properties'
import AdminAddProperties from './components/Admin/AdminProperties/AdminAddProperties/admin-add-properties'
import AdminEditProperties from './components/Admin/AdminProperties/AdminEditProperties/admin-edit-properties'
import AdminLeases from './components/Admin/AdminLeases/admin-leases'
import AdminAddLeases from './components/Admin/AdminLeases/AdminAddLeases/admin-add-leases'
import AdminEditLeases from './components/Admin/AdminLeases/AdminEditLeases/admin-edit-leases'
import AdminTenants from './components/Admin/AdminTenants/admin-tenants'
import AdminPayments from './components/Admin/AdminPayments/admin-payments'
import AdminAddPayments from './components/Admin/AdminPayments/AdminAddPayments/admin-add-payments'
import AdminOwners from './components/Admin/AdminOwners/admin-owners'
import AdminAddOwners from './components/Admin/AdminOwners/AdminAddOwners/admin-add-owners'
import AdminEditOwners from './components/Admin/AdminOwners/AdminEditOwners/admin-edit-owners'
import AdminTransfers from './components/Admin/AdminTransfers/admin-transfers'
import AdminAddTransfers from './components/Admin/AdminTransfers/AdminAddTransfers/admin-add-transfers'
import OwnerOverview from './components/Owner/OwnerOverview/owner-overview'
import OwnerPayments from './components/Owner/OwnerPayments/owner-payments'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      leaseId: '',
      ownerId: '',
      paymentId: '',
      propertyToEdit: '',
      leaseToEdit: '',
      ownerToEdit: ''
     
    }
  }

  setUserType = (type) => {
    this.setState({user: type})
  }

  setLeaseId = (leaseId) => {
    this.setState( {leaseId} )
  }

  setOwnerId = (ownerId) => {
    this.setState( {ownerId} )
  }

  setPaymentId = (paymentId) => {
    this.setState( {paymentId} )
  }

  setPropertyEdit = (propertyId) => {
    this.setState({propertyToEdit: propertyId})
  }

  setLeaseEdit = (leaseId) => {
    this.setState({leaseToEdit: leaseId})
  }

  setOwnerEdit = (ownerId) => {
    this.setState({ownerToEdit: ownerId})
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" render={() => (
              <Home 
              onClickButton={this.setUserType} 
              leaseIdHandler={this.setLeaseId}
              ownerIdHandler={this.setOwnerId}
              />
            )} />
            <Route path="/back" render={() => (
              <div className="container-fluid">
                <div className="row">
                  <NavBar />
                  <SideBar 
                  user = {this.state.user}/>
                  <Route exact path="/back/tenant/overview" render={() => (
                    <TenantOverview
                    leaseId = {this.state.leaseId}
                    />
                  )} />
                  <Route exact path="/back/tenant/payments" render={() => (
                    <TenantPayments 
                    leaseId = {this.state.leaseId}
                    onClickPendingPayment={this.setPaymentId}
                    />
                  )} />
                  <Route exact path="/back/tenant/checkout" render={() => (
                    <TenantCheckout 
                    paymentId = {this.state.paymentId}
                    />
                  )} />
                  <Route exact path="/back/admin/overview" render={() => (
                    <AdminDashboard />
                  )} />
                  <Route exact path="/back/admin/properties" render={() => (
                    <AdminProperties 
                    propertyToEdit = {this.setPropertyEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/properties/add" render={() => (
                    <AdminAddProperties />
                  )} />
                  <Route exact path="/back/admin/properties/edit" render={() => (
                    <AdminEditProperties 
                    propertyId = {this.state.propertyToEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/leases" render={() => (
                    <AdminLeases 
                    leaseToEdit = {this.setLeaseEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/leases/add" render={() => (
                    <AdminAddLeases />
                  )} />
                  <Route exact path="/back/admin/leases/edit" render={() => (
                    <AdminEditLeases 
                    leaseId = {this.state.leaseToEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/tenants" render={() => (
                    <AdminTenants />
                  )} />
                  <Route exact path="/back/admin/payments" render={() => (
                    <AdminPayments />
                  )} />
                  <Route exact path="/back/admin/payments/add" render={() => (
                    <AdminAddPayments />
                  )} />
                  <Route exact path="/back/admin/owners" render={() => (
                    <AdminOwners 
                    ownerToEdit = {this.setOwnerEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/owners/add" render={() => (
                    <AdminAddOwners />
                  )} />
                  <Route exact path="/back/admin/owners/edit" render={() => (
                    <AdminEditOwners 
                    ownerId = {this.state.ownerToEdit}
                    />
                  )} />
                  <Route exact path="/back/admin/transfers" render={() => (
                    <AdminTransfers />
                  )} />
                  <Route exact path="/back/admin/transfers/add" render={() => (
                    <AdminAddTransfers />
                  )} />
                  <Route exact path="/back/owner/overview" render={() => (
                    <OwnerOverview />
                  )} />
                  <Route exact path="/back/owner/payments" render={() => (
                    <OwnerPayments />
                  )} />

                  
                </div>
            </div>
            )} />    
                    
              
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default App;
