import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Trash2, Edit } from 'react-feather'
import './admin-owners.css';
import OwnersList from './OwnersList/owners-list';
import OwnersFilters from './OwnersFilters/owners-filters';
import AdminEditOwners from './AdminEditOwners/admin-edit-owners';

class AdminOwners extends Component {
    constructor(props) {
        super(props)
        this.state = {          
            queryFilter: ''
        }
    }

    setQueryFilter = (query) => {
        this.setState({ queryFilter: query })
    }

    setOwnerToEdit = (id) => {
        this.props.ownerToEdit(id)
    }
    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid leases-module">
                    <div className="row justify-content-center">
                        <OwnersFilters 
                        onFilterByQuery = {this.setQueryFilter}
                        />
                        <OwnersList
                        onClickEdit={this.setOwnerToEdit}
                        query = {this.state.queryFilter}
                        />                        
                    </div>
                </div>
            </main>



        )
    }
}


export default AdminOwners