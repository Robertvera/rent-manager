import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Edit, Trash2 } from 'react-feather'
import './admin-payments.css';
import PaymentsList from './PaymentsList/payments-list';
import PaymentsFilters from './PaymentsFilters/payments-filters';

class AdminPayments extends Component {

    constructor(props) {
        super(props)
        this.state = {
            statusFilter: 'all',
            startingFilter: 'all',
            endingFilter: 'all',
            queryFilter: ''
        }
    }

    setStatusFilter = (status) => {
        this.setState({ statusFilter: status })
    }

    setStartingFilter = (starting) => {
      this.setState({startingFilter: starting})
    }

    setEndingFilter = (ending) => {
      this.setState({endingFilter: ending})
    }

    setQueryFilter = (query) => {
        this.setState({ queryFilter: query })
    }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid leases-module">
                    <div className="row justify-content-center">
                        <PaymentsFilters
                            onFilterByStatus={this.setStatusFilter}
                            onFilterByStarting={this.setStartingFilter}
                            onFilterByEnding={this.setEndingFilter}
                            onFilterByQuery={this.setQueryFilter}
                        />
                        <PaymentsList 
                        status={this.state.statusFilter}
                        starting = {this.state.startingFilter}
                        ending = {this.state.endingFilter}
                        query = {this.state.queryFilter}
                        />
                    </div>
                </div>
            </main>


        )
    }
}


export default AdminPayments