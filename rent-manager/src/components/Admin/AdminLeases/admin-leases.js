import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import './admin-leases.css';
import LeasesList from './LeasesList/leases-list';
import LeasesFilters from './LeasesFilters/leases-filters';

class AdminLeases extends Component {
  render() {
    return (
      <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="container-fluid leases-module">
          <div className="row justify-content-center">
            <LeasesFilters />
            <LeasesList />
          </div>
        </div>
      </main>
    )
  }
}


export default AdminLeases