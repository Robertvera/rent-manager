import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class PaymentsFilters extends Component {
    constructor(props) {
        super(props)
        // this.state = {


        // }
    }

    keepStatus = (status) => {
        this.props.onFilterByStatus(status)
    }

    keepStarting = (starting) => {
        this.props.onFilterByStarting(starting)
    }

    keepEnding = (ending) => {
        this.props.onFilterByEnding(ending)
    }

    render() {
        return (
            <div className="card col-12 py-3">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <select 
                        className="custom-select col-lg-3 col-md-5 col-sm-12" 
                        name="status"
                        onChange={(e) => {this.keepStatus(e.target.value)}}
                        >
                            <option value="all">All</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                        </select>
                        <input 
                        type="date" 
                        className="custom-select col-lg-3 col-md-5 col-sm-12" 
                        name="starting-date"
                        onChange={(e) => {this.keepStarting(e.target.value)}}
                        />
                        <input 
                        type="date" 
                        className="custom-select col-lg-3 col-md-5 col-sm-12" 
                        name="ending-date" 
                        onChange={(e) => {this.keepEnding(e.target.value)}}
                        />
                        {/* <input 
                        type="text" 
                        className="form-control col-lg-2 col-md-5 col-sm-12" 
                        placeholder="Search by property/concept" 
                        onChange={(e) => {this.keepQuery(e.target.value)}}
                        /> */}
                        <div className="col-lg-2 col-md-12 col-sm-12 p-0">
                            <NavLink to="payments/add"><button type="button" className="btn btn-success">+ Add new payment</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PaymentsFilters