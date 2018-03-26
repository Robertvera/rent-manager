import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import './admin-leases.css';
import LeasesList from './LeasesList/leases-list';
import LeasesFilters from './LeasesFilters/leases-filters';

class AdminLeases extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusFilter: 'all',
      // startingFilter: 'all',
      // endingFilter: 'all',
      queryFilter: ''
    }
  }

  setStatusFilter = (status) => {
    this.setState({statusFilter: status})
  }

  // setStartingFilter = (starting) => {
  //   this.setState({startingFilter: starting})
  // }

  // setEndingFilter = (ending) => {
  //   this.setState({endingFilter: ending})
  // }

  setQueryFilter = (query) => {
    this.setState({queryFilter: query})
  }

  setLeaseToEdit = (id) => {
    this.props.leaseToEdit(id)
  }

  render() {
    return (
      <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="container-fluid leases-module">
          <div className="row justify-content-center">
            <LeasesFilters 
            onFilterByStatus = {this.setStatusFilter}
            // onFilterByStarting = {this.setStartingFilter}
            // onFilterByEnding = {this.setEndingFilter}
            onFilterByQuery = {this.setQueryFilter}
            />
            <LeasesList
              onClickEdit={this.setLeaseToEdit}
              status = {this.state.statusFilter}
              // starting = {this.state.startingFilter}
              // ending = {this.state.endingFilter}
              query = {this.state.queryFilter}
            />
          </div>
        </div>
      </main>
    )
  }
}


export default AdminLeases