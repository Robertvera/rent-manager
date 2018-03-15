import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class LeaseStarting extends Component {
    render() {
        return (
            <div className="card col-12 col-lg-5 col-md-5 mx-3 mb-5" id="starting-date">
                <div className="card-body">
                    <h6 className="card-title text-center">STARTING DATE</h6>
                    <p className="card-text numbers text-center">24/09/1999</p>
                </div>
            </div>            
        )
    }
}


export default LeaseStarting