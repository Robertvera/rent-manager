import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import { Maximize2, User } from 'react-feather'
import './admin-properties.css';
import PropertiesFilters from './PropertiesFilters/properties-filters';
import PropertiesList from './PropertiesList/properties-list';

class AdminProperties extends Component {
    constructor(props) {
        super(props)
        this.state = {
          statusFilter: 'all',
          neighbourhoodFilter: 'all',
          queryFilter: ''
        }
      }

      setStatusFilter = (status) => {
          this.setState({statusFilter: status})
      }

      setNeighbourhoodFilter = (hood) => {
          this.setState({neighbourhoodFilter: hood})
      }

      setQueryFilter = (query) => {
          this.setState({queryFilter: query})
      }

      SetPropertyToEdit = (reference) => {
          this.props.propertyToEdit(reference)
      }

    render() {
        return (
            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="container-fluid apartments-module mb-5">
                        <PropertiesFilters 
                        onFilterByStatus={this.setStatusFilter}
                        onFilterByNeighbourhood={this.setNeighbourhoodFilter}
                        onFilterByQuery={this.setQueryFilter}
                        />                        
                        <PropertiesList 
                        status = {this.state.statusFilter}
                        hood = {this.state.neighbourhoodFilter}
                        query = {this.state.queryFilter}
                        onClickEdit = {this.SetPropertyToEdit}
                        />
                </div>
            </main>




        )
    }
}


export default AdminProperties