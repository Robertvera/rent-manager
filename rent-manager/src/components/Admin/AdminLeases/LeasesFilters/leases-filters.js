import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class LeasesFilters extends Component {
    constructor(props) {
        super(props)
        // this.state = {

        // }
    }

    // handleChange = (e) => {

    // }

    render() {
        return (
            <div className="card col-12 py-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="status">
                            <option value="active">Active</option>
                            <option value="closed">Closed</option>
                        </select>
                        <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="starting-date">
                            <option value="barceloneta">January 18</option>
                            <option value="born">January 18</option>
                            <option value="eixample">January 18</option>
                            <option value="gothic">January 18</option>
                            <option value="gracia">January 18</option>
                            <option value="poble-nou">January 18</option>
                            <option value="raval">January 18</option>
                        </select>
                        <select className="custom-select col-lg-2 col-md-5 col-sm-12" name="ending-date">
                            <option value="barceloneta">January 18</option>
                            <option value="born">January 18</option>
                            <option value="eixample">January 18</option>
                            <option value="gothic">January 18</option>
                            <option value="gracia">January 18</option>
                            <option value="poble-nou">January 18</option>
                            <option value="raval">January 18</option>
                        </select>
                        <input type="text" className="form-control col-lg-2 col-md-5 col-sm-12" placeholder="Search by property" />
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