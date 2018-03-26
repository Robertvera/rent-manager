import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class TenantsFilters extends Component {

    constructor(props) {
        super(props)
        // this.state = {


        // }
    }

    keepQuery = (query) => {
        this.props.onFilterByQuery(query)
    }

    render() {
        return (
            <div className="card col-4 py-3">
                <div className="container-fluid">
                    <div className="row">
                        <input 
                        type="text" 
                        className="form-control col-lg-12 col-md-12 col-sm-12" 
                        placeholder="Search by property/concept" 
                        onChange={(e)=> {this.keepQuery(e.target.value)}}
                        />
                    </div>
                </div>
            </div>

        )
    }
}


export default TenantsFilters