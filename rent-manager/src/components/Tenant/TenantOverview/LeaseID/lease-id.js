import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class LeaseID extends Component {
    render(props) {
        return (
            <div className="card col-12">
                <div className="card-body">
                    <h6 className="card-title text-center">LEASE ID</h6>
                    <p className="card-text text-center">{this.props.leaseId}</p>
                </div>
            </div>
        )
    }
}


export default LeaseID





