import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

class LeaseStarting extends Component {
    render() {
        let startingDate = (new Date(this.props.starting)).toString()
        return (
            <div className="card col-12 col-lg-5 col-md-5 mx-3 mb-5" id="starting-date">
                <div className="card-body">
                    <h6 className="card-title text-center">STARTING DATE</h6>
                    <p className="card-text numbers text-center">{moment(startingDate).format('DD-MMM-YYYY').toString()}</p>
                </div>
            </div>            
        )
    }
}


export default LeaseStarting