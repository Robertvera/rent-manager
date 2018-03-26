import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import './admin-tenants.css';
import TenantsFilters from './TenantsFilters/admin-tenants-filters';
import TenantsList from './TenantsList/admin-tenants-list';

class AdminTenants extends Component {
    constructor(props) {
        super(props)
        this.state = {
          queryFilter: ''
        }
      }

    setQueryFilter = (query) => {
        this.setState({queryFilter: query})
      }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid leases-module">
                    <div className="row justify-content-center">
                        <TenantsFilters
                        onFilterByQuery = {this.setQueryFilter}
                        />
                        <TenantsList
                        query = {this.state.queryFilter}
                        />
                    </div>
                </div>
            </main>

        )
    }
}


export default AdminTenants