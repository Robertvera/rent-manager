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
                  <Route exact path="/back/admin/dashboard" render={() => (
                    <AdminDashboard />
                  )} />
                  <Route exact path="/back/admin/properties" render={() => (
                    <AdminProperties />
                  )} />
                  <Route exact path="/back/admin/add-properties" render={() => (
                    <AdminAddProperties />
                  )} />
                  <Route exact path="/back/admin/leases" render={() => (
                    <AdminLeases />
                  )} />
                  <Route exact path="/back/admin/add-leases" render={() => (
                    <AdminAddLeases />
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
