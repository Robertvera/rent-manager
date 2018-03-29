import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class LeasesFilters extends Component {
    constructor(props) {
        super(props)
        // this.state = {


        // }
    }

    keepStatus = (status) => {
        this.props.onFilterByStatus(status)
    }

    keepQuery = (query) => {
        this.props.onFilterByQuery(query)
    }

    render() {
        return (
            <div className="card col-12 py-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <select 
                        className="custom-select col-lg-2 col-md-5 col-sm-12" 
                        name="status"
                        onChange={(e)=> {this.keepStatus(e.target.value)}}
                        >
                            <option value="all">All</option>
                            <option value={true}>Active</option>
                            <option value={false}>Closed</option>
                        </select>
                        
                        <input 
                        type="text" 
                        className="form-control col-lg-2 col-md-5 col-sm-12" 
                        placeholder="Search by property" 
                        onChange={(e)=> {this.keepQuery(e.target.value)}}
                        />
                        <div className="col-lg-2 col-md-12 col-sm-12 p-0">
                            <NavLink to="leases/add"><button type="button" className="btn btn-success">+ Add new lease</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default LeasesFilters