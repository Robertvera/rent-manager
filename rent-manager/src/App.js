import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home/home'
import NavBar from './components/NavBar/navbar'
import SideBar from './components/SideBar/sidebar'
import TenantOverview from './components/Tenant/TenantOverview/tenant-overview'
import TenantPayments from './components/Tenant/TenantPayments/tenant-payments'
import TenantCheckout from './components/Tenant/TenantCheckout/tenant-checkout'
import AdminDashboard from './components/Admin/AdminDashboard/admin-dashboard'
import AdminProperties from './components/Admin/AdminProperties/admin-properties'
import AdminAddProperties from './components/Admin/AdminProperties/AdminAddProperties/admin-add-properties'
import AdminLeases from './components/Admin/AdminLeases/admin-leases'
import AdminAddLeases from './components/Admin/AdminLeases/AdminAddLeases/admin-add-leases'
import AdminTenants from './components/Admin/AdminTenants/admin-tenants'
import AdminPayments from './components/Admin/AdminPayments/admin-payments'
import AdminAddPayments from './components/Admin/AdminPayments/AdminAddPayments/admin-add-payments'
import AdminOwners from './components/Admin/AdminOwners/admin-owners'
import AdminAddOwners from './components/Admin/AdminOwners/AdminAddOwners/admin-add-owners'
import AdminTransfers from './components/Admin/AdminTransfers/admin-transfers'
import AdminAddTransfers from './components/Admin/AdminTransfers/AdminAddTransfers/admin-add-transfers'
import OwnerOverview from './components/Owner/OwnerOverview/owner-overview'
import OwnerPayments from './components/Owner/OwnerPayments/owner-payments'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" render={() => (
              <Home />
            )} />
            <Route path="/back" render={() => (
              <div className="container-fluid">
                <div className="row">
                  <NavBar />
                  <SideBar />
                  <Route exact path="/back/tenant/overview" render={() => (
                    <TenantOverview />
                  )} />
                  <Route exact path="/back/tenant/payments" render={() => (
                    <TenantPayments />
                  )} />
                  <Route exact path="/back/tenant/checkout" render={() => (
                    <TenantCheckout />
                  )} />
                  <Route exact path="/back/admin/overview" render={() => (
                    <AdminDashboard />
                  )} />
                  <Route exact path="/back/admin/properties" render={() => (
                    <AdminProperties />
                  )} />
                  <Route exact path="/back/admin/properties/add" render={() => (
                    <AdminAddProperties />
                  )} />
                  <Route exact path="/back/admin/leases" render={() => (
                    <AdminLeases />
                  )} />
                  <Route exact path="/back/admin/leases/add" render={() => (
                    <AdminAddLeases />
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
                    <AdminOwners />
                  )} />
                  <Route exact path="/back/admin/owners/add" render={() => (
                    <AdminAddOwners />
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
